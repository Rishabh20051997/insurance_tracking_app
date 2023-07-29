import colors from '@resources/colors';
import {FONT_TYPE} from '@theme/font';
import UIText from '@widgets/ui-text';
import React, {ReactElement} from 'react';
import {View} from 'react-native';
import {styles} from './user-avatar-styles';

/**
 *
 * @param {string} props.avatarText
 * @param {string} props.backgroundColor
 * @param {number} props.size
 * @returns  User Avatar View
 */
const UserAvatarView: React.FC<IUserAvatarViewProps> = (
  props,
): ReactElement => {
  const finalStyle = styles(props);
  return (
    <View style={finalStyle.containerStyle}>
      <UIText
        text={props?.avatarText || ''}
        FontType={FONT_TYPE.TITLE_EXTRA_LARGE}
        color={colors.gray_scale.white}
        textAlign={'center'}
      />
    </View>
  );
};

export default UserAvatarView;
