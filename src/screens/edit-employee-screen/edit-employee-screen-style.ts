import {StyleSheet} from 'react-native';
import colors from '@resources/colors';

export const styles = StyleSheet.create({
  rootComponent: {
    flex: 1,
    backgroundColor: colors.gray_scale.white,
    padding: 10,
  },
  loaderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: colors.toned_down.pdf_container_background,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99,
  },
  component: {
    paddingTop: 24,
    paddingHorizontal: 20,
    backgroundColor: colors.gray_scale.white,
    flex: 1,
  },
  backButtonComponent: {
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginLeft: -5,
  },
  backButtonStyle: {
    alignSelf: 'flex-start',
  },
  headingComponent: {
    marginTop: 36,
  },
  mobileNumberInputTextStyle: {
    marginTop: 36,
  },
  passwordInputTextStyle: {
    marginTop: 24,
  },
  errorResponseComponent: {
    marginTop: 10,
  },
  loginBtnElementWrapper: {
    backgroundColor: colors.primary.cardinal,
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtnDisabledElementWrapper: {
    backgroundColor: colors.gray_scale.tundora,
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  registerText: {
    marginVertical: 10,
  },
  loginBtnLoaderStyle: {
    backgroundColor: colors.primary.cardinal,
    borderRadius: 8,
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtnOuterWrapper: {
    marginHorizontal: 24,
    marginTop: 24,
    height: 48,
    left: 0,
    right: 0,
    bottom: 10,
  },
  scrollViewContainerStyle: {
    paddingBottom: 30,
  },
});
