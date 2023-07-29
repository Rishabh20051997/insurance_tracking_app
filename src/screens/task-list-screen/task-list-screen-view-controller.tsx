import {useNavigation} from '@react-navigation/native';
import {
  callAddNewTask,
  getAllTaskList,
  getNewTaskApiStatus,
  getNewTaskLoadingStatus,
  getTaskLoadingList,
  loadAllTaskList,
} from '@store/splices/task-list-entity';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const useTaskListScreenViewController = () => {
  const taskList = useSelector(getAllTaskList());

  const taskListLoadingStatus = useSelector(getTaskLoadingList());

  const newTaskLoadingStatus = useSelector(getNewTaskLoadingStatus());
  const newTaskApiStatus = useSelector(getNewTaskApiStatus());

  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    if (newTaskLoadingStatus === false && newTaskApiStatus === false) {
      dispatch(loadAllTaskList());
    }
  }, [newTaskLoadingStatus, newTaskApiStatus]);

  const onTaskSubmitPressed = (task: string) => {
    dispatch(callAddNewTask(task));
  };

  return {
    taskList,
    taskListLoadingStatus,
    onTaskSubmitPressed,
  };
};

export default useTaskListScreenViewController;
