import React from 'react';
import {View} from 'react-native';
import {styles} from './resources/styles/styles';

/**
 * View for UIRow
 * @param {IUIRowViewProps} props
 * @returns
 */

const UIRowView: React.FunctionComponent<IUIRowViewProps> = ({
  children,
  style,
}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default UIRowView;
