import React from 'react';
import {ActivityIndicator} from 'react-native';

import colors from '@resources/colors';

const UILoaderView: React.FC<IUILoaderProps> = ({
  color = colors.gray_scale.black,
  size = 'small',
  style = {},
}) => {
  return <ActivityIndicator color={color} size={size} style={style} />;
};

export default UILoaderView;
