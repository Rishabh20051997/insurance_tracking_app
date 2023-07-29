import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import useHomeScreenViewController from './home-screen-view-controller';
import colors from '@resources/colors';
import UIText from '@widgets/ui-text';
import {FONT_TYPE} from '@theme/font';
import EmployeeCard from './component/employee-card/employee-card';

const HomeScreen = () => {
  const {
    employeeList = [],
    employeeLoadingStatus,
    onDeleteButtonPressed,
    onEditButtonPressed,
  } = useHomeScreenViewController();

  const renderLoader = () => {
    return (
      <View style={styles.mainContainer}>
        <ActivityIndicator color={colors.primary.cardinal} size={20} />
      </View>
    );
  };

  const renderEmptyScreen = () => {
    return (
      <View style={styles.mainContainer}>
        <UIText FontType={FONT_TYPE.LABEL_LARGE} text={'No Data Found'} />
      </View>
    );
  };
  return employeeLoadingStatus ? (
    renderLoader()
  ) : employeeList?.length === 0 ? (
    renderEmptyScreen()
  ) : (
    <FlatList
      data={employeeList}
      renderItem={({item}) =>
        EmployeeCard({
          dataItem: item,
          onEditButtonPressed,
          onDeleteButtonPressed,
        })
      }
    />
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default HomeScreen;
