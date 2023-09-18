import React, {memo, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import colors from '@resources/colors';
import {FONT_TYPE} from '@theme/font';
import UIText from '@widgets/ui-text';
import {TextInput, TextInputProps} from 'react-native-paper';
import {styles} from './styles';
import DatePickerComponent from '@widgets/date-picker/date-picker';
import { ACTION_NAME } from '../new-insurance-track-constant';
import { dateFormatTypes, formatDate } from '@helpers/utils';

interface IDatePickerBoxProps extends TextInputProps {
  keyProperty: string;
  errorMessage?: string;
  isRequired?: boolean;
  actionName: ACTION_NAME;
  onDateChange: (action: string, value: string) => void
}

const DatePickerBox = ({
  keyProperty,
  value,
  errorMessage,
  isRequired,
  actionName,
  onDateChange,
  ...props
}: IDatePickerBoxProps) => {
  const [isDatePickerVisible, updateDatePickerVisibilityStatus] =
    useState(false);
  return (
    <>
      <TouchableOpacity
        onPress={() => updateDatePickerVisibilityStatus(true)}
        style={styles.textInputStyle}>
        <TextInput
          label={keyProperty}
          value={formatDate(value || '', {format: dateFormatTypes.DDMMMYY})}
          mode={'outlined'}
          editable={false}
          outlineColor={colors.gray_scale.chinese_silver}
          activeOutlineColor={colors.gray_scale.chinese_silver}
          error={errorMessage?.length ? true : false}
          style={styles.textInputBackgroundStyle}
          textColor={colors.gray_scale.black}
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
      </TouchableOpacity>
      <DatePickerComponent
        isDatePickerVisible={isDatePickerVisible}
        onDateChange={(date: Date) => {
          updateDatePickerVisibilityStatus(false);
          onDateChange(actionName, date.toISOString());
        }}
        onClose={() => {
          updateDatePickerVisibilityStatus(false);
        }}
      />
    </>
  );
};

export default memo(DatePickerBox);
