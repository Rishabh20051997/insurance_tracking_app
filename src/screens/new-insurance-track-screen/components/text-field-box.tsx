import React, {memo} from 'react';
import {View} from 'react-native';
import colors from '@resources/colors';
import {FONT_TYPE} from '@theme/font';
import UIText from '@widgets/ui-text';
import {TextInput, TextInputProps} from 'react-native-paper';
import {styles} from './styles';
import {log} from '@services/reactotron/reactotron-log';
import { ACTION_NAME } from '../new-insurance-track-constant';

interface ITextFieldBoxProps extends TextInputProps {
  keyProperty: string;
  errorMessage?: string;
  isRequired?: boolean
  actionName: ACTION_NAME;
  onChangeValue: (action: string, value: string) => void
}

const TextFieldBox = ({
  keyProperty,
  value,
  errorMessage,
  actionName,
  isRequired,
  onChangeValue,
  ...props
}: ITextFieldBoxProps) => {
  return (
    <View style={styles.textInputStyle}>
      <TextInput
        label={keyProperty}
        value={value}
        mode={'outlined'}
        outlineColor={colors.gray_scale.chinese_silver}
        activeOutlineColor={colors.gray_scale.chinese_silver}
        error={errorMessage?.length ? true : false}
        style={styles.textInputBackgroundStyle}
        textColor={colors.gray_scale.black}
        onChangeText={(value) => {
          onChangeValue(actionName, value)
        }}
        {...props}
      />
      {isRequired ? <UIText
        text={'* Required'}
        FontType={FONT_TYPE.BODY_SMALL}
        color={colors.primary.cardinal}
      /> : null}
      <UIText
        text={errorMessage}
        FontType={FONT_TYPE.BODY_MEDIUM}
        color={colors.primary.cardinal}
      />
    </View>
  );
};

export default memo(TextFieldBox);
