type StackNavigationProp =
  import('@react-navigation/stack').StackNavigationProp;
type CompositeNavigationProp =
  import('@react-navigation/native').CompositeNavigationProp;

type preAuthParamList = {
  login: undefined | {screen: string};
  register: undefined | {screen: string};
  userType: undefined | {screen: string};
};

type preAuthNavigationParams = CompositeNavigationProp<
  StackNavigationProp<preAuthParamList, 'auth'>,
  StackNavigationProp<preAuthParamList, 'otp'>,
  StackNavigationProp<preAuthParamList, 'login'>,
  StackNavigationProp<preAuthParamList, 'register'>
>;
