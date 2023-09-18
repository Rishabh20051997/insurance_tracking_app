type IHomeScreenItemKey =
  import('@screens/home-screen/home-screen-view-constant').HOME_SCREEN_ITEM_KEYS;

interface IHomeScreenItem {
  key: IHomeScreenItemKey;
  title: string;
  icon: typeof JSX.Element;
}
