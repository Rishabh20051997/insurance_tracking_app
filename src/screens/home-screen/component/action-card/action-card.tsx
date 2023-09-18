import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {FONT_TYPE} from '@theme/font';
import UICard from '@widgets/ui-card';
import UIText from '@widgets/ui-text';
import UserAvatar from '@widgets/user-avatar/user-avatar';

interface IActionCardProps {
  dataItem: IHomeScreenItem;
  onItemClicked: (dataItem: IHomeScreenItem) => void;
}

const ActionCard = ({dataItem, onItemClicked}: IActionCardProps) => {
  const {title} = dataItem;
  return (
    <UICard style={styles.cardContainer}>
      <TouchableOpacity
        style={styles.upperContainer}
        onPress={() => onItemClicked(dataItem)}>
        <UserAvatar first_name={title} size={50} />
        <UIText
          FontType={FONT_TYPE.LABEL_LARGE}
          text={title}
          ellipsizeMode="tail"
          numberOfLines={2}
          style={styles.titleText}
          textAlign="center"
        />
      </TouchableOpacity>
    </UICard>
  );
};

const styles = StyleSheet.create({
  cardContainer: {flex: 1, margin: 6, padding: 6},
  upperContainer: {
    alignItems: 'center',
  },
  titleText: {flexShrink: 1, paddingHorizontal: 10},
});

export default ActionCard;
