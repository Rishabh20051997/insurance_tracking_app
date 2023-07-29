import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import UIDividerView from './ui-divider-view';

interface IUIDividerProps {
  height?: number;
  containerStyle?: StyleProp<ViewStyle>;
}

/**
 * @param {ViewStyle} params.containerStyle provide the style of Divider
 * @returns returns the thin line
 */
const UIDivider: React.FunctionComponent<IUIDividerProps> = ({
  containerStyle,
}) => {
  return <UIDividerView containerStyle={containerStyle} />;
};

export default UIDivider;
