import React from 'react';
import {TextStyle} from 'react-native';
import {Text} from 'react-native-paper';

import colors from '../../resources/colors';
import {FONT_TYPE} from '../../theme/font';

// import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

/**
 * View for UIText
 * @param {IUITextViewProps} props
 * @returns
 */

interface IUITextViewProps extends TextProps {
  // Font type
  FontType?: IFontTypeProp;
  // Font size
  size?: number;
  // Font color
  color?: string;
  // Styling for container
  containerStyle?: TextStyle;
  // Max number of lines
  numberOfLines?: number;
  // Alignment of text
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
  // Styling for text
  style?: TextStyle | TextStyle[];
  // Children to render
  children?: ReactNode;
  text?: string | number;
}
const UITextView: React.FunctionComponent<IUITextViewProps> = ({
  FontType = FONT_TYPE.BODY_MEDIUM, // type of font according to design guideline
  color = colors.accent.solid_black,
  numberOfLines,
  textAlign,
  style,
  children,
  text,
  ellipsizeMode,
}) => {
  // const fontSize = useMemo(() => RFValue(FontType.fontSize, deviceHeight), []);
  const textValue = text === undefined ? children : text;
  return (
    <Text
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      variant={FontType as any}
      style={[
        {
          color: color,
          textAlign: textAlign,
          height: 'auto',
        },
        style,
      ]}>
      {textValue === undefined ? '' : textValue}
    </Text>
  );
};

export default React.memo(UITextView);
