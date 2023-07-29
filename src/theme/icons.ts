type IconType =
  | 'feather'
  | 'fontAwesome'
  | 'fontAwesomeFive'
  | 'ionicon'
  | 'material'
  | 'materialCommunity'
  | 'materialIcons'
  | 'octicons';

type IIconType = {
  [key in IconType]: string;
};

export const ICON_TYPES: IIconType = {
  feather: 'feather',
  fontAwesome: 'font-awesome',
  fontAwesomeFive: 'font-awesome-5',
  ionicon: 'ionicon',
  material: 'material',
  materialCommunity: 'material-community',
  materialIcons: 'MaterialIcons',
  octicons: 'octicons',
};
