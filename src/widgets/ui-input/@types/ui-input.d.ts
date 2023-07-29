type KeyboardType =
  | 'default'
  | 'email-address'
  | 'numeric'
  | 'phone-pad'
  | 'number-pad'
  | 'decimal-pad';
type KeyboardTypeIOS =
  | 'ascii-capable'
  | 'numbers-and-punctuation'
  | 'url'
  | 'name-phone-pad'
  | 'twitter'
  | 'web-search';
type KeyboardTypeAndroid = 'visible-password';

type NumberPadClick = (e: string) => void;

type KeyboardTypes =
  | KeyboardType
  | KeyboardTypeAndroid
  | KeyboardTypeIOS
  | undefined;

interface IUIInputProps {
  placeholder: string;
  keyboardType: KeyboardTypes;
  inputValue: string;
  numberOfLines?: number;
  editable?: boolean;
  onChangeText: NumberPadClick;
  multiline?: boolean;
  style?: object;
  placeholderTextColor?: string;
  componentStyle?: object;
}
