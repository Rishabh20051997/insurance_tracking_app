import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import useHomeScreenViewController from './home-screen-view-controller';
import colors from '@resources/colors';
import {HOME_SCREEN_ITEM_LIST} from './home-screen-view-constant';
import ActionCard from './component/action-card/action-card';

const HomeScreen = () => {
  const {loadingStatus, onActionCardClicked} = useHomeScreenViewController();

  const renderLoader = () => {
    return (
      <View style={styles.mainContainer}>
        <ActivityIndicator color={colors.primary.cardinal} size={20} />
      </View>
    );
  };

  return loadingStatus ? (
    renderLoader()
  ) : (
    <FlatList
      data={HOME_SCREEN_ITEM_LIST}
      numColumns={2}
      contentContainerStyle={{flex: 1}}
      renderItem={({item}) =>
        ActionCard({
          dataItem: item,
          onItemClicked: onActionCardClicked,
        })
      }
    />
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default HomeScreen;
