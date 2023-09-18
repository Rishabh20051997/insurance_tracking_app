import React, {useEffect} from 'react';
import {NativeModules} from 'react-native';
import useMainScreenViewController from './main-screen-view-controller';
import PreAuthNavigator from '@navigators/pre-auth-navigator';
import PostAuthNavigator from '@navigators/post-auth-navigator';

const MainScreen = () => {
  const {isLoggedIn, isAppReady} = useMainScreenViewController();

  // const inAppUpdate = NativeModules.InAppUpdate;

  useEffect(() => {
    if (isAppReady && isLoggedIn) {
      // const timer = setTimeout(() => {
      //   inAppUpdate.checkUpdate(); // this is how you check for update
      // }, 5000);

      // return () => clearTimeout(timer);
    }
  }, [isLoggedIn, isAppReady]);

  return isLoggedIn  ? <PostAuthNavigator /> : <PreAuthNavigator />;
};

export default MainScreen;
