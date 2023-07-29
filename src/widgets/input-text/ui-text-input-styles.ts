import colors from '@resources/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  textInputComponent: {
    backgroundColor: colors.toned_down.athensGray,
    borderRadius: 8,
    overflow: 'hidden',
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInputStyle: {color: colors.accent.solid_black, flex: 1},
});
