import React from 'react';
import {Svg, ClipPath, G, Path, Defs, Rect} from 'react-native-svg';
const BackBtnIcon = ({width = 16, height = 16, color = '#333333'}) => (
  <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
    <Path
      d="M3.828 6.99992H16V8.99992H3.828L9.192 14.3639L7.778 15.7779L0 7.99992L7.778 0.221924L9.192 1.63592L3.828 6.99992Z"
      fill={color}
    />
  </Svg>
);
export default BackBtnIcon;
