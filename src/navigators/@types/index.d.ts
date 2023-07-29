type RouteProp = import('@react-navigation/native').RouteProp;
interface IRoutesProps {
  title: string;
  name: string;
  component: ScreenComponentType<bottomTabParamList, any> | undefined;
  headerShown?: boolean;
}
