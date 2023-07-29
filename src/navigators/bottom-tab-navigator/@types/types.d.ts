interface IBottomTabOptions {
  title: sstring | ((props: HeaderTitleProps) => ReactNode);
  icon: {
    active: string;
    inActive: string;
  };
  component: ScreenComponentType<bottomTabParamList, any> | undefined;
}


type bottomTabParamList = {
  Home: undefined;
  More: undefined;
};