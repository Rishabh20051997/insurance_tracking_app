import {StyleSheet} from 'react-native';

export const styles = (props: IUserAvatarViewProps) =>
  StyleSheet.create({
    containerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      width: props.size,
      height: props.size,
      borderRadius: props.size / 2,
      backgroundColor: props.backgroundColor,
    },
  });
