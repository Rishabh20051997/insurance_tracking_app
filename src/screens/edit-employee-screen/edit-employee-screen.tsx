import UIPressable from '@widgets/ui-pressable';
import React, {ReactElement} from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';

import UIText from '@widgets/ui-text';
import colors from '@resources/colors';
import {FONT_TYPE} from '@theme/font';
import UITextInput from '@widgets/input-text';
import {styles} from './edit-employee-screen-style';
import useEditEmployeeScreenViewController from './edit-employee-screen-view-controller';
import {log} from '@services/reactotron/reactotron-log';

const EditEmployeeScreen = () => {
  const {
    firstName,
    lastName,
    enableUpdateButton,
    loadingStatus,
    onFirstNameTextChanged,
    onLastNameTextChanged,
    onSubmit,
  } = useEditEmployeeScreenViewController();

  /**
   *
   * @returns login button ui
   */
  const SubmitButton = (): ReactElement => {
    return (
      <UIPressable
        disabled={!enableUpdateButton || false}
        onPress={onSubmit}
        style={
          !enableUpdateButton
            ? styles.loginBtnDisabledElementWrapper
            : styles.loginBtnElementWrapper
        }
        // styles.loginBtnOuterWrapper
      >
        <UIText
          text={'Submit'}
          color={colors.gray_scale.white}
          FontType={FONT_TYPE.BODY_MEDIUM}
        />
      </UIPressable>
    );
  };

  const renderLoader = () => {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color={colors.primary.cardinal} size={20} />
      </View>
    );
  };

  return (
    <View style={styles.rootComponent}>
      {loadingStatus ? renderLoader() : null}
      <ScrollView
        style={styles.component}
        contentContainerStyle={styles.scrollViewContainerStyle}
        contentInsetAdjustmentBehavior="scrollableAxes"
        showsVerticalScrollIndicator={false}>
        <View>
          <UITextInput
            label={'First Name'}
            keyboardType={'ascii-capable'}
            text={firstName}
            onChangeText={onFirstNameTextChanged}
            placeholder={'Enter First Name'}
            returnKeyType="next"
            containerStyle={styles.mobileNumberInputTextStyle}
          />
          <UITextInput
            label={'Last Name'}
            keyboardType={'ascii-capable'}
            text={lastName}
            onChangeText={onLastNameTextChanged}
            placeholder={'Enter Last Name'}
            returnKeyType="next"
            containerStyle={styles.mobileNumberInputTextStyle}
          />
        </View>
      </ScrollView>
      <SubmitButton />
    </View>
  );
};

export default EditEmployeeScreen;
