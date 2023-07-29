type IFontType = {
  [key in FontType]: IFontTypeProp;
};
type IFontTypeProp = string // {fontFamily: string; fontSize: number};
type FontType = 'HEADLINE_LARGE' |
'HEADLINE_MEDIUM' |
'HEADLINE_SMALL' |
'TITLE_EXTRA_LARGE' |
'TITLE_LARGE' |
'TITLE_MEDIUM' |
'TITLE_SMALL' |
'LABEL_LARGE' |
'LABEL_MEDIUM' |
'LABEL_SMALL' |
'BODY_LARGE_BOLD' |
'BODY_LARGE' |
'BODY_MEDIUM' |
'BODY_SMALL' |
'BODY_EXTRA_SMALL';
interface IFont {
  [key: string]: number;
}
