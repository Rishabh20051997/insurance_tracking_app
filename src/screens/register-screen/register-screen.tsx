import colors from '@resources/colors';
import UIPressable from '@widgets/ui-pressable';
import React, {ReactElement, useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {styles} from './register-screen-style';
import BackBtnIcon from '@resources/icons/back-btn-icon';
import UIText from '@widgets/ui-text';
import {FONT_TYPE} from '@theme/font';
import UITextInput from '@widgets/input-text';
import EyeIcon from '@resources/icons/eye-icon';
import CloseEyeIcon from '@resources/icons/close-eye-icon';
import useRegisterScreenViewController from './register-screen-view-controller';

const RegisterScreen = () => {
  const {
    isLoading,
    userName = '',
    password = '',
    enableUpdateButton = false,
    role = '',
    onUserNameTextChanged = () => {},
    onRegister = () => {},
    onPasswordChangeText = () => {},
  } = useRegisterScreenViewController();

  const [isPasswordSecure, handleSecureText] = useState(true);

  /**
   * page Title component - to add the heading/subHeading of the page
   */
  const PageTitleComponent = (): ReactElement => {
    return (
      <View style={styles.headingComponent}>
        <UIText FontType={FONT_TYPE.TITLE_EXTRA_LARGE}>
          Welcome as {role}!
        </UIText>
        <UIText
          FontType={FONT_TYPE.BODY_MEDIUM}
          color={colors.gray_scale.dove_gray}>
          Please Register
        </UIText>
      </View>
    );
  };

  /**
   *
   * @returns login button ui
   */
  const LoginButton = (): ReactElement => {
    return (
      <UIPressable
        disabled={!enableUpdateButton || false}
        onPress={onRegister}
        style={
          !enableUpdateButton
            ? styles.loginBtnDisabledElementWrapper
            : styles.loginBtnElementWrapper
        }
        // styles.loginBtnOuterWrapper
      >
        <UIText
          text={'Register'}
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
      {isLoading ? renderLoader() : null}
      <ScrollView
        style={styles.component}
        contentContainerStyle={styles.scrollViewContainerStyle}
        contentInsetAdjustmentBehavior="scrollableAxes"
        showsVerticalScrollIndicator={false}>
        <PageTitleComponent />
        {/* phone input */}
        <View>
          <UITextInput
            label={'User Name'}
            keyboardType={'ascii-capable'}
            text={userName}
            onChangeText={onUserNameTextChanged}
            placeholder={'Enter User Name'}
            returnKeyType="next"
            containerStyle={styles.mobileNumberInputTextStyle}
          />
          <UITextInput
            label={'Password'}
            keyboardType="ascii-capable"
            secureTextEntry={isPasswordSecure}
            placeholder={'Enter Password'}
            text={password}
            returnKeyType="done"
            onChangeText={onPasswordChangeText}
            onSubmitEditing={onRegister}
            containerStyle={styles.passwordInputTextStyle}
            icon={
              isPasswordSecure ? (
                <Pressable onPress={() => handleSecureText(false)}>
                  <EyeIcon />
                </Pressable>
              ) : (
                <Pressable onPress={() => handleSecureText(true)}>
                  <CloseEyeIcon />
                </Pressable>
              )
            }
          />
        </View>
      </ScrollView>
      <LoginButton />
    </View>
  );
};

export default RegisterScreen;
