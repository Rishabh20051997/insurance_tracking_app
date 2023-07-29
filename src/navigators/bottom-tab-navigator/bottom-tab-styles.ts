import colors from '@resources/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  commonMyCourseLabel: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 3,
    width: 80,
    backgroundColor: 'transparent',
    fontWeight: '600',
  },
  MyCourseLabel: {
    color: colors.primary.cardinal,
    marginLeft: -15,
  },
  MyCourseInActiveLabel: {
    color: colors.gray_scale.alto,
  },
  labelContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: 7,
  },
  labelFocusedContainer: {
    width: 50,
    borderTopWidth: 3,
    position: 'absolute',
    top: 0,
    borderTopColor: colors.primary.cardinal,
  },
  labelFocusedStyle: {
    textAlign: 'center',
    marginTop: 3,
    color: colors.primary.cardinal,
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: '600',
  },
  labelStyle: {
    textAlign: 'center',
    marginTop: 3,
    color: colors.gray_scale.alto,
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: '600',
  },
  iconStyle: {
    alignSelf: 'center',
    marginTop: 6,
  },
  headerRightContainer: {
    paddingHorizontal: 10,
  },
});
