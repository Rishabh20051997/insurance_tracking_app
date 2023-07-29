import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
  getUserDetails,
  getUserLoggedInStatus,
  updateLoggedIn,
  updateLoggedOut,
  updateUserInfo,
} from '../../store/splices/auth-entity';

import {log} from '@services/reactotron/reactotron-log';
import asyncStorageService from '@services/async-storage-service';

const useMainScreenViewController = () => {
  const [isAppReady, setIsAppReady] = useState(false);
  const isLoggedIn = useSelector(getUserLoggedInStatus); // to get user details

  const dispatch = useDispatch<AppDispatch>();
  //to hide the splash screen
  useEffect(() => {
    if (isLoggedIn !== undefined) {
      // to avoid initial rendering , initial value of is logged in is undefined

      setIsAppReady(true); //to make sure state is done updating
    }
  }, [isLoggedIn]);

  useEffect(() => {
    //initially we will take token details and user details from async
    asyncStorageService
      .getData('@authUser')
      .then(async value => {
        log('value: ', value);
        // get the stored user detail which selected_categories
        if (value != null) {
          dispatch(updateUserInfo(value));
          dispatch(updateLoggedIn());
        } else {
          dispatch(updateLoggedOut());
        }
      })
      .catch(() => {
        dispatch(updateLoggedOut());
        //update the details , if is it null we will set is logged in state to false
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {isLoggedIn: isLoggedIn || false, isAppReady};
};

export default useMainScreenViewController;
