import {StyleSheet} from 'react-native';
import colors from '@resources/colors';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.gray_scale.white,
    paddingVertical: 14,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 2,
    shadowColor: colors.accent.solid_black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
  },
});
