import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {HttpMethod} from '@secure-access-control/client';
import {createSelector} from 'reselect';

import asyncStorage from '@services/async-storage-service';
import {CACHING_TIME} from '../enum';
import apiDispatch from '../util/dispatch';
import {SLICE_NAME} from '@store/constant';
import {ToastAndroid} from 'react-native';
import {log} from '@services/reactotron/reactotron-log';
//Slice => reducer and actions
const slice = createSlice({
  name: SLICE_NAME.AUTH,
  initialState: <Authentication>{
    data: {
      token: {
        authToken: '',
        refreshToken: '',
      },
      user: {
        userName: '',
        id: '',
      },
      isLoggedIn: false,
      loginProcess: {
        isLoginInProcess: false,
        isLoginSuccess: false,
      },
      registrationProcess: {
        isRegistrationInProcess: false,
        isRegistrationSuccess: false,
      },
    },
  },
  reducers: {
    authenticationApiCallStart: (authentication, {payload}) => {
      authentication.data.loginProcess.isLoginInProcess = true;
      authentication.data.loginProcess.isLoginSuccess = false;
    },
    /**
     *
     * @param authentication
     * @param action action.payload get the authentication and set the refresh token to the async store
     */
    authenticationApiCalledSuccess: (
      authentication: Authentication,
      action: PayloadAction<{
        refreshToken: string;
        accessToken: string;
        user: LooseObject;
      }>,
    ) => {
      const {refreshToken, accessToken, user} = action?.payload;
      log('authenticationApiCalledSuccess called', action);
      const {user_id, userName} = user;
      authentication.data.token = {
        authToken: accessToken,
        refreshToken: refreshToken,
      };
      authentication.data.user = {
        ...authentication.data.user,
        userName: userName,
        id: user_id,
      };

      authentication.data.loginProcess.isLoginInProcess = false;
      authentication.data.loginProcess.isLoginSuccess = true;
      authentication.data.isLoggedIn = true;
      asyncStorage.storeData('@authUser', authentication.data);

      ToastAndroid.show('Successful Login', ToastAndroid.SHORT);
    },
    authenticationApiCallFail: (authentication, {payload}) => {
      const {message = 'Something went wrong'} = payload?.data;
      ToastAndroid.show(message, ToastAndroid.SHORT);

      authentication.data.loginProcess.isLoginInProcess = false;
      authentication.data.loginProcess.isLoginSuccess = false;
    },
    registrationApiCallStart: (authentication, {payload}) => {
      authentication.data.registrationProcess.isRegistrationInProcess = true;
      authentication.data.registrationProcess.isRegistrationSuccess = false;
    },
    registrationApiCallSuccess: (authentication, {payload}) => {
      authentication.data.registrationProcess.isRegistrationInProcess = false;
      authentication.data.registrationProcess.isRegistrationSuccess = true;
      ToastAndroid.show('Successful Register', ToastAndroid.SHORT);
    },
    registrationApiCallFail: (authentication, {payload}) => {
      log('Api :', payload);
      authentication.data.registrationProcess.isRegistrationInProcess = false;
      authentication.data.registrationProcess.isRegistrationSuccess = false;
      ToastAndroid.show(
        payload?.data?.message || 'Something went wrong',
        ToastAndroid.SHORT,
      );
    },
    /**
     *
     * @param authentication
     * @param action action.payload take the refresh token and update the token
     */
    authTokenUpdated: (authentication: Authentication, {payload}) => {
      authentication.data.token.authToken = payload;
    },
    /**
     *
     * @param authentication
     * used to update the logged in status
     */
    updateIsLoggedIn: (authentication, action) => {
      authentication.data.isLoggedIn = true;
    },
    /**
     *
     * @param authentication
     * used to update the log out status
     */
    updateIsLoggedOut: (authentication, action) => {
      authentication.data.isLoggedIn = false;
    },
    updateUserInfo: (authentication: Authentication, {payload}) => {
      authentication.data = payload;
    },
  },
});
const {
  authenticationApiCalledSuccess,
  authTokenUpdated,
  authenticationApiCallStart,
  updateIsLoggedIn,
  updateIsLoggedOut,
  authenticationApiCallFail,
  registrationApiCallStart,
  registrationApiCallSuccess,
  registrationApiCallFail,
  updateUserInfo,
} = slice.actions;

export {updateUserInfo};
export default slice.reducer;

/**
 *
 * @param {string} options.userName user name
 * @param {string} options.password password entered by the user
 * @returns call user login api to verify the user returns the {refresh_token, user}
 */
export const callAuthenticationApi = (options: IOptionsParams) => () => {
  return apiDispatch({
    url: `auth`,
    method: HttpMethod.POST,
    data: options,
    onStart: authenticationApiCallStart.type,
    onSuccess: authenticationApiCalledSuccess.type,
    onError: authenticationApiCallFail.type,
    auth: false,
    cacheValidityDuration: CACHING_TIME.INVALIDATE,
  });
};

/**
 *
 * @param {string} options.userName user name
 * @param {string} options.password password entered by the user
 * @returns call user login api to verify the user returns the {refresh_token, user}
 */
export const callUserRegisterApi = (options: IOptionsParams) => () => {
  return apiDispatch({
    url: `register`,
    method: HttpMethod.POST,
    data: options,
    onStart: registrationApiCallStart.type,
    onSuccess: registrationApiCallSuccess.type,
    onError: registrationApiCallFail.type,
    auth: false,
    cacheValidityDuration: CACHING_TIME.INVALIDATE,
  });
};

/**
 *
 * @param token auth token
 * @returns used to update auth token
 */
export const updateAuthToken = (token: string) => (dispatch: Dispatch) =>
  dispatch({
    type: authTokenUpdated.type,
    payload: token,
  });

/**
 *
 * @returns used to update the logged in status
 */
export const updateLoggedIn = () => (dispatch: Dispatch) =>
  dispatch({
    type: updateIsLoggedIn.type,
    payload: {},
  });

/**
 *
 * @returns used to update the log out status
 */
export const updateLoggedOut = () => (dispatch: Dispatch) => {
  dispatch({
    type: updateIsLoggedOut.type,
    payload: {},
  });
};

/**
 * get the logged in status
 */
export const getUserLoggedInStatus = createSelector(
  (state: RootState) => state.auth,
  (isLoggedIn: Authentication) => isLoggedIn.data.isLoggedIn,
);
/**
 * get user name
 */
export const getUserName = createSelector(
  (state: RootState) => state.auth,
  (user: Authentication) => user.data.user.userName,
);

/**
 * get loading state
 */
export const getAuthIsLoading = createSelector(
  (state: RootState) => state.auth,
  (loading: Authentication) => loading.data.loginProcess.isLoginInProcess,
);

/**
 * get loading state of registration
 */
export const getRegistrationLoadingStatus = createSelector(
  (state: RootState) => state.auth,
  (loading: Authentication) =>
    loading.data.registrationProcess.isRegistrationInProcess,
);

/**
 * get api status of registration
 */
export const getRegistrationApiSuccessStatus = createSelector(
  (state: RootState) => state.auth,
  (loading: Authentication) =>
    loading.data.registrationProcess.isRegistrationSuccess,
);

/**
 * get the authentication detail like refresh token, auth token and user detail
 */
export const getAuthTokens = createSelector(
  (state: RootState) => state.auth,
  (auth: Authentication) => auth.data.token,
);

/**
 * get the user details
 */
export const getUserDetails = createSelector(
  (state: RootState) => state.auth,
  (auth: Authentication) => auth.data.user,
);
