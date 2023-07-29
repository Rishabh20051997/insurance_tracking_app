import React from 'react';

import UILoaderView from './ui-loader-view';

const UILoader: React.FC<IUILoaderProps> = ({color, size, style}) => (
  <UILoaderView color={color} size={size} style={style} />
);

export default UILoader;
