import colors from '@resources/colors';
import {FONT_TYPE} from '@theme/font';
import UIPressable from '@widgets/ui-pressable';
import UIText from '@widgets/ui-text';
import React, {ReactElement} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {styles} from './more-screen-style';
import useMoreScreenViewController from './more-screen-view-controller';

const MoreScreen = () => {
  const {onLogout, onThingsToLearnPressed} = useMoreScreenViewController();

  const LogoutButton = (): ReactElement => {
    return (
      <UIPressable onPress={onLogout} style={styles.loginBtnElementWrapper}>
        <UIText
          text={'Log Out'}
          color={colors.gray_scale.white}
          FontType={FONT_TYPE.BODY_MEDIUM}
        />
      </UIPressable>
    );
  };

  return (
    <View style={styles.rootComponent}>
      <ScrollView
        style={styles.component}
        contentContainerStyle={styles.scrollViewContainerStyle}
        contentInsetAdjustmentBehavior="scrollableAxes"
        showsVerticalScrollIndicator={false}>
        <UIPressable
          onPress={onThingsToLearnPressed}
          style={styles.contentElement}>
          <UIText
            text={'1. Things To Learn'}
            color={colors.primary.cardinal}
            FontType={FONT_TYPE.LABEL_LARGE}
          />
          <UIText
            text={'>'}
            color={colors.primary.cardinal}
            FontType={FONT_TYPE.LABEL_LARGE}
          />
        </UIPressable>
      </ScrollView>
      <LogoutButton />
    </View>
  );
};

export default MoreScreen;
