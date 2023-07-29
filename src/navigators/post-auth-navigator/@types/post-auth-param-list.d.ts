type NavigatorScreenParams =
  import('@react-navigation/native').NavigatorScreenParams;
type StackNavigationProp =
  import('@react-navigation/stack').StackNavigationProp;
type CompositeNavigationProp =
  import('@react-navigation/native').CompositeNavigationProp;

import('@react-navigation/native-stack').NativeStackScreenProps;
type StackNavigationProp =
  import('@react-navigation/stack').StackNavigationProp;
type CompositeNavigationProp =
  import('@react-navigation/native').CompositeNavigationProp;



type bottomNavigatorParamList = {
  BottomNavigator: NavigatorScreenParams<bottomTabParamList>;
};

type postAuthParamList = {
  BottomNavigator: NavigatorScreenParams<bottomTabParamList>;
  Home: undefined
  More: undefined
};