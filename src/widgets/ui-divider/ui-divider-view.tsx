import React from 'react';
import {StyleSheet, StyleProp, ViewStyle} from 'react-native';

import {Divider} from 'react-native-paper';

interface IUIDividerViewProps {
  containerStyle?: StyleProp<ViewStyle>;
}

/**
 * View for UIDivider
 * @param {ViewStyle} params.containerStyle provide the style of Divider
 * @returns it return thin line which we can use as an divider
 */
const UIDividerView: React.FunctionComponent<IUIDividerViewProps> = ({
  containerStyle,
}) => {
  return (
    <Divider horizontalInset bold style={[styles.container, containerStyle]} />
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: '#CCCCCC'},
});
export default UIDividerView;
