import axios from 'axios';
import {
  createRequest,
  HttpClient,
  HttpMethod,
} from '@secure-access-control/client';

import asyncStorage from '@services/async-storage-service';
import {store} from '@store/configureStore';

import authService from '@services/auth-services';
import {SERVER_BASE_URL} from '@store/app-configuration';
import {updateAuthToken} from '@store/splices/auth-entity';
import {log} from '@services/reactotron/reactotron-log';

let refreshApiCall: Promise<any> | null = null;
let userData: any;
/**
 * This function will ensure that at a time, we only have a single API call for refresh token
 * @returns
 */
const refreshApiHandler = async () => {
  userData = await asyncStorage.getData('@authUser');

  log('userData : ', userData);

  if (refreshApiCall) {
    return refreshApiCall;
  } else {
    let request = createRequest(
      SERVER_BASE_URL,
      'refresh',
      HttpMethod.POST,
      HttpClient.MOBILE,
      null,
      {
        refreshToken: userData.token.refreshToken,
      },
    );
    refreshApiCall = axios.request(request);
  }
  return refreshApiCall;
};
/**
 * Function which is used to handle refresh token logic
 * @param error
 * @returns
 */
const handleRefreshToken = async (error: any) => {
  // const {logout} = useAuthHook();
  /*
   * When response code is 401, try to refresh the token.
   * Eject the interceptor so it doesn't loop in case
   * token refresh causes the 401 response
   */
  try {
    const tokenRefreshResponse = await refreshApiHandler();
    refreshApiCall = null;
    const responseData = tokenRefreshResponse.data;
    const token = responseData.accessToken;
    /**
     * Update User Token / Saved
     */

    log('userDataToSave : ', responseData);
    const userDataToSave = {
      token: {
        authToken: responseData?.accessToken,
        refreshToken: responseData?.refreshToken,
      },
      user: {
        ...responseData.user,
        userName: responseData.user.userName,
        id: responseData.user.userId,
      },
      isLoggedIn: true,
    };

    log('userDataToSave : ', userDataToSave);

    asyncStorage.storeData('@authUser', userDataToSave);
    let userData = await asyncStorage.getData('@authUser');
    userData = {...userData, token: token};
    store.dispatch(updateAuthToken(token));
    let data;
    if (
      error.response.config.method == 'post' ||
      error.response.config.method == 'patch'
    ) {
      data = JSON.parse(error.response.config.data.toString());
    } else {
      data = error.response.config.data;
    }
    const updatedRequest = createRequest(
      SERVER_BASE_URL,
      error.response.config.url,
      error.response.config.method,
      HttpClient.MOBILE,
      token,
      data,
    );

    return axios(updatedRequest);
  } catch (error: any) {
    if (error?.response?.status === 498) {
      authService.clearEverything();
    }
    return Promise.reject(error);
  }
};
axios.interceptors.response.use(
  response => response,
  async (error: any) => {
    // Handle refresh token if the error status code is 401, otherwise normal reject

    if (error?.response?.status === 401) return handleRefreshToken(error);
    return Promise.reject(error);
  },
);
export const axiosInterceptor = axios;
