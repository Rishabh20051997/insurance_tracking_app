import React from 'react';
import {View, Image} from 'react-native';

import {styles} from './ui-image-style';

const UIImageView = ({
  url = '',
  style,
  resizeMode,
  onError,
  defaultImage,
}: IUIImageViewProps) => {
  return (
    <View style={[styles.component, style]}>
      <Image
        source={{
          uri: url,
        }}
        style={styles.imageStyle}
        defaultSource={defaultImage}
        resizeMode={resizeMode}
        onError={onError}
      />
    </View>
  );
};

export default React.memo(UIImageView);
