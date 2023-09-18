import React from 'react';
import {StyleSheet} from 'react-native';
import DatePicker from 'react-native-date-picker';

const DatePickerComponent = ({
  isDatePickerVisible = false,
  dateValue = new Date().toISOString(),
  onClose = () => {},
  onDateChange = (_val: Date) => {
    /** */
  },
}) => {
  return (
    <DatePicker
      mode="date"
      locale="en"
      date={new Date(dateValue)}
      style={styles.mainContainer}
      modal={true}
      open={isDatePickerVisible}
      onConfirm={onDateChange}
      onCancel={onClose}
      androidVariant="iosClone"
      theme="auto"
    />
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    height: 200,
    marginVertical: 100,
  },
});

export default DatePickerComponent;
