import React, {useEffect, useState} from 'react';

import UIImageView from './ui-image-view';
import {styles} from './ui-image-style';

const UIImage = ({
  url,
  style = styles.defaultImageStyle,
  resizeMode = 'cover',
  defaultImage,
}: IUIImageProps) => {
  const onError = () => {};

  return (
    <UIImageView
      url={url}
      style={style}
      resizeMode={resizeMode}
      defaultImage={defaultImage}
      onError={onError}
    />
  );
};

export default React.memo(UIImage);
