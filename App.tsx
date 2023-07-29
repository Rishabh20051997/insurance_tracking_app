/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { createContext, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { store } from './src/store/configureStore';
import { navigationRef } from './src/store/navigation-data-store';
import MainScreen from './src/screens/main-screen';
import { PaperProvider } from 'react-native-paper';
import theme from './src/theme/app-library-theme';
import('./src/services/reactotron/reactotron-config');


const App = () => {
  // useInterNetHandlingService();
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
      <NavigationContainer>
        <MainScreen />
      </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App
