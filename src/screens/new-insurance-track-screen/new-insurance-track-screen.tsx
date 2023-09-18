import React from 'react';
import {FlatList, View} from 'react-native';
import useNewInsuranceTrackScreenViewController from './new-insurance-track-controller';
import {styles} from './new-insurance-track-screen-style';
import TextFieldBox from './components/text-field-box';
import DatePickerBox from './components/date-picker-box';
import {FIELD_TYPE} from './new-insurance-track-constant';
import {dateFormatTypes, formatDate} from '@helpers/utils';
import UIPressable from '@widgets/ui-pressable';
import { FONT_TYPE } from '@theme/font';
import colors from '@resources/colors';
import UIText from '@widgets/ui-text';



const NewInsuranceTrackScreen = () => {
  const {dataList, updateTextValue,
    updateDateValue,  onSubmit} =
    useNewInsuranceTrackScreenViewController();

  /**
   *
   * @returns login button ui
   */
  const SubmitButton = () => {
    return (
      <UIPressable
        onPress={onSubmit}
        style={styles.loginBtnElementWrapper}
      >
        <UIText
          text={'Submit'}
          color={colors.gray_scale.white}
          FontType={FONT_TYPE.BODY_MEDIUM}
        />
      </UIPressable>
    );
  };

  // const renderLoader = () => {
  //   return (
  //     <View style={styles.loaderContainer}>
  //       <ActivityIndicator color={colors.primary.cardinal} size={20} />
  //     </View>
  //   );
  // };

  const renderTextBoxItem = ({item}: {item: IStateElement}) => {
    return (
      <TextFieldBox
        value={item?.value + ''}
        errorMessage={item?.error + ''}
        keyProperty={item.label}
        actionName={item.actionName}
        isRequired={item.isRequired}
        defaultValue={item?.defaultValue + ''}
        onChangeValue={updateTextValue}
      />
    );
  };
  
  const renderDatePickerItem = ({item}: {item: IStateElement}) => {
    return (
      <DatePickerBox
        value={item?.value + ''}
        errorMessage={item?.error + ''}
        keyProperty={item.label}
        actionName={item.actionName}
        isRequired={item.isRequired}
        defaultValue={item?.defaultValue + ''}
        onDateChange={updateDateValue}
      />
    );
  };
  
  const renderItem = ({item}: {item: IStateElement}) => {
    return item.fieldType === FIELD_TYPE.TEXTBOX
      ? renderTextBoxItem({item})
      : renderDatePickerItem({item});
  };


  return (
    <View style={styles.rootComponent}>
      <FlatList
        data={dataList}
        renderItem={renderItem}
        style={styles.component}
        contentContainerStyle={styles.scrollViewContainerStyle}
        contentInsetAdjustmentBehavior="scrollableAxes"
        showsVerticalScrollIndicator={false}
      />
      <SubmitButton />
    </View>
  );
};

export default NewInsuranceTrackScreen;
