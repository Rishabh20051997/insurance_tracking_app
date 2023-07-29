type viewStyle = import('react-native').ViewStyle;

interface IUICardViewProps {
  style?: viewStyle;
  children: JSX.Element |JSX.Element[] ;
  containerStyle?:ViewStyle
}

interface IUICardProps {
  style?: viewStyle;
  children: JSX.Element | JSX.Element[];
  containerStyle?:ViewStyle;
}
