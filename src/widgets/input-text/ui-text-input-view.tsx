import React from 'react';
import {View, TextInput} from 'react-native';

import colors from '@resources/colors';
import {FONT_SIZE, FONT_TYPE} from '@theme/font';
import UIText from '@widgets/ui-text';
import {styles} from './ui-text-input-styles';
import {useFontRatio} from '@helpers/fontPixelRatio';

/**
 * Widget to render customizable text
 * @param {IUITextInputViewProps} props
 * @returns
 */
const UITextInput: React.FunctionComponent<IUITextInputViewProps> = ({
  containerStyle,
  label,
  text,
  setText,
  defaultValue = '',
  placeholder,
  ref,
  keyboardType = 'default',
  secureTextEntry = false,
  maxLength = 1024,
  returnKeyType = 'done',
  icon = <></>,
  onFocus = () => {},
  onChangeText,
  onSubmitEditing = () => {},
}) => {
  return (
    <View style={containerStyle}>
      {label && (
        <UIText
          FontType={FONT_TYPE.BODY_LARGE_BOLD}
          color={colors.gray_scale.mine_shaft}>
          {label}
        </UIText>
      )}
      <View style={styles.textInputComponent}>
        <TextInput
          style={[
            styles.textInputStyle,
            {fontSize: useFontRatio(FONT_SIZE.font14)},
          ]}
          value={text}
          onChangeText={setText ? setText : onChangeText}
          placeholder={placeholder}
          keyboardType={keyboardType}
          ref={ref}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          onFocus={onFocus}
          defaultValue={defaultValue}
          placeholderTextColor={colors.gray_scale.boulder}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry}
        />
        {icon}
      </View>
    </View>
  );
};

export default UITextInput;
