import {StyleSheet} from 'react-native';
import colors from '@resources/colors';

export const styles = StyleSheet.create({
  rootComponent: {
    flex: 1,
    backgroundColor: colors.gray_scale.white,
    padding: 10,
  },
  component: {
    paddingTop: 24,
    paddingHorizontal: 20,
    backgroundColor: colors.gray_scale.white,
    flex: 1,
  },

  loginBtnElementWrapper: {
    backgroundColor: colors.primary.cardinal,
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContainerStyle: {
    paddingBottom: 30,
  },
  contentElement: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    padding: 10,
    borderColor: colors.gray_scale.alto,
  },
});
