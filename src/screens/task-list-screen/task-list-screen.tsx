import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import useTaskListScreenViewController from './task-list-screen-view-controller';
import colors from '@resources/colors';
import UIText from '@widgets/ui-text';
import {FONT_TYPE} from '@theme/font';
import UITextInput from '@widgets/input-text';
import UIPressable from '@widgets/ui-pressable';
import UIDivider from '@widgets/ui-divider';

const renderNewTaskAddView = ({
  onTaskSubmitPressed = (value: string) => {},
}) => {
  const [task, onTaskTextUpdate] = useState('');
  return (
    <View>
      <UITextInput
        label={''}
        keyboardType={'ascii-capable'}
        text={task}
        onChangeText={onTaskTextUpdate}
        placeholder={'Enter Task in Detail'}
        // returnKeyType="next"
        containerStyle={styles.mobileNumberInputTextStyle}
      />
      <UIPressable
        style={styles.registerText}
        onPress={() => onTaskSubmitPressed(task)}>
        <UIText
          text={'Add New'}
          color={colors.gray_scale.white}
          FontType={FONT_TYPE.BODY_SMALL}
        />
      </UIPressable>
      <UIDivider />
    </View>
  );
};

const TaskListScreen = () => {
  const {taskList, taskListLoadingStatus, onTaskSubmitPressed} =
    useTaskListScreenViewController();

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
  return taskListLoadingStatus ? (
    renderLoader()
  ) : (
    <FlatList
      data={taskList}
      renderItem={({item, index}) => (
        <UIText
          text={`${index + 1}. ${item.task}`}
          color={colors.primary.cardinal}
          FontType={FONT_TYPE.BODY_LARGE}
        />
      )}
      contentContainerStyle={{flexGrow: 1, padding: 10}}
      ItemSeparatorComponent={UIDivider}
      ListEmptyComponent={renderEmptyScreen}
      ListHeaderComponent={() =>
        renderNewTaskAddView({
          onTaskSubmitPressed,
        })
      }
    />
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  mobileNumberInputTextStyle: {
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.gray_scale.alto,
  },
  registerText: {
    margin: 10,
    backgroundColor: colors.primary.cardinal,
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TaskListScreen;
