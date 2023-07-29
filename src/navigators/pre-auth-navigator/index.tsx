import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '@screens/login-screen/login-screen';
import UserTypeScreen from '@screens/user-type-screen';
import RegisterScreen from '@screens/register-screen';

const PreAuthStack = createStackNavigator<preAuthParamList>();
const PreAuthNavigator = () => {
  return (
    <PreAuthStack.Navigator initialRouteName="login">
      <PreAuthStack.Screen
        name="login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <PreAuthStack.Screen
        name="userType"
        component={UserTypeScreen}
        options={{
          headerShown: true,
          title: 'Register',
        }}
      />
      <PreAuthStack.Screen
        name="register"
        component={RegisterScreen}
        options={{
          headerShown: true,
          title: 'Register',
        }}
      />
    </PreAuthStack.Navigator>
  );
};

export default PreAuthNavigator;
