import {
  HttpClient,
  HttpMethod,
  createRequest,
} from '@secure-access-control/client';
import {axiosInterceptor} from './axios/axios-service';

import {store} from '@store/configureStore';
import {resetApiLastCalledMapCache} from '@store/middlewares/api-middleware';
import {SERVER_BASE_URL} from '@store/app-configuration';
import asyncStorage from './async-storage-service';
import { updateLoggedOut } from '@store/splices/auth-entity';
import { ToastAndroid } from 'react-native';

class AuthService {
  constructor() {}
  clearEverything = () => {
    //on success we will clear everything in async

    asyncStorage.clearAll(
      () => {
        store.dispatch(updateLoggedOut()); //update is logged in to false in auth entity
        store.dispatch({type: 'auth/logout', payload: []}); //clearing the redux state
        resetApiLastCalledMapCache();

        ToastAndroid.show('You have successfully logged you', ToastAndroid.SHORT)
      },
      () => {
        ToastAndroid.show('Please clear the storage or uninstall and install the app', ToastAndroid.SHORT)
      },
    );
  };

  logout = (token: string) => {
    axiosInterceptor
      .request(
        createRequest(
          SERVER_BASE_URL,
          'logout',
          HttpMethod.POST,
          HttpClient.MOBILE,
          token,
          {
            refreshToken: token
          },
        ),
      )
      .then(() => {
        this.clearEverything();
      })
      .catch(err => {
        this.clearEverything();
      });
  };
}
const authService = new AuthService();
export default authService;
