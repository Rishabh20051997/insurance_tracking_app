import React, {useCallback} from 'react';
import {View} from 'react-native';

import colors from '@resources/colors';
import {USER_TYPES} from '@store/constant';
import {FONT_TYPE} from '@theme/font';
import UIPressable from '@widgets/ui-pressable';
import UIText from '@widgets/ui-text';
import useUserTypeScreenViewController from './user-type-screen-view-controller';

const UserTypeScreen = () => {
  const {onRoleSelected = () => {}} = useUserTypeScreenViewController();

  const roleBtn = useCallback((type: string) => {
    return (
      <UIPressable
        onPress={() => onRoleSelected(type)}
        style={{
          backgroundColor: colors.primary.cardinal,
          padding: 2,
          marginVertical: 10,
          borderRadius: 10,
        }}>
        <UIText
          FontType={FONT_TYPE.TITLE_EXTRA_LARGE}
          text={type}
          color={colors.gray_scale.white}
          textAlign="center"
        />
      </UIPressable>
    );
  }, []);

  return (
    <View style={{flex: 1, padding: 10}}>
      <UIText
        FontType={FONT_TYPE.TITLE_MEDIUM}
        text={'Select User Type'}
        // textAlign='center'
      />
      <View style={{marginTop: 10}}>
        {roleBtn(USER_TYPES.USER)}
        {roleBtn(USER_TYPES.EDITOR)}
        {roleBtn(USER_TYPES.ADMIN)}
      </View>
    </View>
  );
};

export default UserTypeScreen;
