import React, {ReactElement} from 'react';
import {View, Text} from 'react-native';

import SvgToIcon from '@helpers/svg-to-icon';

interface IBottomTabItemProps {
  componentStyle: object;
  iconStyle: object;
  textStyle: object;
  icon: string;
  height: number;
  width: number;
  tabTitle: string;
}

/**
 *
 * @param {object} params.componentStyle to give the style to component
 * @param {object} params.iconStyle to give the style to icons
 * @param {object} params.textStyle to give the style to tabs title
 * @param {string} params.icon svg name
 * @param {number} params.height to give the height to icon
 * @param {number} params.width to give the width to icon
 * @param {string} params.tabTitle  title of tabs
 * @returns returns the ui of bottom tab icon and title component
 */
const BottomTabItem = ({
  componentStyle,
  iconStyle,
  textStyle,
  icon,
  height,
  width,
  tabTitle,
}: IBottomTabItemProps): ReactElement => {
  return (
    <View style={componentStyle}>
      <SvgToIcon
        xml={icon}
        height={height}
        width={width}
        iconStyle={iconStyle}
      />
      <Text style={textStyle}>{tabTitle}</Text>
    </View>
  );
};

export default BottomTabItem;
