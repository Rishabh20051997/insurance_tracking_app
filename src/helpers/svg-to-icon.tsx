import React from 'react';
import {View} from 'react-native';
import {SvgXml} from 'react-native-svg';

interface ISvgToIconProps {
  xml?: any;
  height: number;
  width: number;
  iconStyle?: object;
}

const SvgToIcon = ({
  xml,
  height = 24,
  width = 24,
  iconStyle,
}: ISvgToIconProps) => {
  return (
    <View style={iconStyle}>
      <SvgXml xml={xml} width={height} height={width} />
    </View>
  );
};

export default SvgToIcon;
