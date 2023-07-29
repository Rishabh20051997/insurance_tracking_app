type NavigatorScreenParams =
  import('@react-navigation/native').NavigatorScreenParams;
type ViewStyle = import('react-native').ViewStyle;
type TextStyle = import('react-native').TextStyle;

interface IBottomTabItemProps {
  componentStyle: ViewStyle;
  textStyle: TextStyle | View ;
  children: JSX.Element;
  textColor: string;
  tabTitle: string;
}

