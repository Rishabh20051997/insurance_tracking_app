import React, {ReactNode} from 'react';
import {Pressable, View, ViewStyle} from 'react-native';
import colors from 'resources/colors';

interface IUIPressableProps {
  children: ReactNode;
  onPress?: () => void;
  style?: ViewStyle | ViewStyle[];
  testID?: string;
  rippleColor?: string;
  disabled?: boolean;
  hitSlop?: number;
}

/**
 * Widget for press element
 * @param {IUIPressableProps} props
 * @returns
 */
const UIPressable: React.FunctionComponent<IUIPressableProps> = ({
  children,
  onPress,
  rippleColor = colors.gray_scale.white,
  style,
  hitSlop = 0,
  testID,
  disabled,
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      hitSlop={hitSlop}
      style={style}
      testID={testID}
      android_ripple={{color: rippleColor}}>
      {children}
    </Pressable>
  );
};

export default UIPressable;
