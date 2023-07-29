type ReactNode = import('react').ReactNode;
type AnimatedValue = import('react-native').Animated.Value;
type ViewStyle = import('react-native').ViewStyle;
type TextStyle = import('react-native').TextStyle;
type GestureResponderEvent = import('react-native').GestureResponderEvent;
type TextProps = import('react-native').TextProps;
type LayoutChangeEvent = import('react-native').LayoutChangeEvent;
type Source = import('react-native-fast-image').Source;
type ImageRequireSource = import('react-native').ImageRequireSource;
type ResizeMode = import('react-native-fast-image').ResizeMode;

interface IUIBtnViewProps {
  showLoader: boolean;
  textProps: IUITextViewProps;
  iconProps: LooseObject;
}

interface IUIRowViewProps {
  // Children to render
  children: ReactNode;
  // Container styling
  style?: ViewStyle | ViewStyle[];
}

interface IUITextInputViewProps {
  setText?: React.Dispatch<React.SetStateAction<string>>;
  onChangeText?: (str: string) => void;
  text?: string;
  setText(text: string): void;
  text?: string;
  ref?: LegacyRef<TextInput> | undefined;
  // Font type
  type?: string;
  // Font size
  size?: number;
  // Font color
  color?: string;
  // Styling for container
  containerStyle?: ViewStyle;
  // Max number of lines
  numberOfLines?: number;
  // Alignment of text
  textAlign?: string;
  // Styling for text
  textStyle?: textStyle;
  // Flag to strike out text
  strikeText?: boolean;
  // Children to render
  children?: ReactNode;
  returnKeyType?: ReturnKeyTypeOptions | undefined;
  label?: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  secureTextEntry?: boolean;
  maxLength?: number;
  placeholder: string;
  onSubmitEditing?(): void;
  onFocus?(): void;
  icon?: ReactNode;
  defaultValue?: string;
}

// interface IUITextViewProps {
//   // Font type
//   type?: string;
//   // Font size
//   size?: number;
//   // Font color
//   color?: string;
//   // Styling for container
//   containerStyle?: ViewStyle | ViewStyle[];
//   // Max number of lines
//   numberOfLines?: number;
//   // Alignment of text
//   textAlign?: string;
//   // Styling for text
//   textStyle?: object;
//   // Flag to strike out text
//   strikeText?: boolean;
//   // Children to render
//   children?: ReactNode;
// }

interface IUIImageProps {
  url: string;
  style?: ViewStyle;
  resizeMode?: ResizeMode;
  defaultImage: number;
}

interface IUIImageViewProps {
  url: string;
  style: ViewStyle;
  resizeMode: ResizeMode;
  onError: () => void;
  defaultImage: number;
}

interface IUITextViewProps extends TextProps {
  // Font type
  FontType: IFontTypeProp;
  // Font size
  size?: number;
  // Font color
  color?: string;
  // Styling for container
  containerStyle?: ViewStyle;
  // Max number of lines
  numberOfLines?: number;
  // Alignment of text
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
  // Styling for text
  style?: object;
  // Children to render
  children?: ReactNode;
  text?: string;
}
