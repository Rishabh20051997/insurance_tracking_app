import React, {ReactElement} from 'react';
import {View} from 'react-native';

import {styles} from './ui-card-styles';

const UICardView = ({
  style,
  children,
  containerStyle,
}: IUICardViewProps): ReactElement => {
  return (
    <View style={[styles.component, style, containerStyle]}>{children}</View>
  );
};

export default UICardView;
