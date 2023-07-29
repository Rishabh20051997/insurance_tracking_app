import {createSelector, createSlice} from '@reduxjs/toolkit';
import apiDispatch from '@store/util/dispatch';
import {SLICE_NAME} from '@store/constant';
import {HttpMethod} from '@secure-access-control/client';
import {CACHING_TIME} from '@store/enum';
import {ToastAndroid} from 'react-native';

const TASK_LIST = SLICE_NAME.TASK_LIST;

/**
 *
 * @param item task item received from server
 * @returns {ITaskItem} data required
 */
const formatTaskData = (item: LooseObject) => {
  const {_id, task} = item;

  return {
    _id,
    task,
  } as ITaskItem;
};

// called by apiDispatch to initiate api call
const onApiFetchInitiateReducer = (taskListState: ITaskListState) => {
  taskListState.isLoading = true;
  // taskListState.list = {}
};

// called by apiDispatch on success of api call with payload
const onSuccessfullyDataFetchedReducer = (
  taskListState: ITaskListState,
  {payload}: {payload: LooseObject},
) => {
  const {data: dataList = [], message = '', status = false} = payload;
  const formattedData = dataList.map(formatTaskData);
  const finalData = {
    data: formattedData,
    message,
    status,
  };

  taskListState.isLoading = false;
  taskListState.list = finalData;
};

// called by apiDispatch on failure of api call with payload
const onDataFetchFailureReducer = (taskListState: ITaskListState) => {
  taskListState.isLoading = false;
};

// called by apiDispatch to initiate api call
const onNewTaskAddApiFetchInitiateReducer = (taskListState: ITaskListState) => {
  taskListState.newTask.isLoading = true;
  taskListState.newTask.hasApiError = false;
};

// called by apiDispatch on success of api call with payload
const onNewTaskAddSuccessfullyDataFetchedReducer = (
  taskListState: ITaskListState,
  {payload}: {payload: LooseObject},
) => {
  taskListState.newTask.isLoading = false;
  taskListState.newTask.hasApiError = false;
};

// called by apiDispatch on failure of api call with payload
const onNewTaskAddDataFetchFailureReducer = (
  taskListState: ITaskListState,
  {payload}: {payload: LooseObject},
) => {
  ToastAndroid.show(
    payload?.message || 'Something went wrong!',
    ToastAndroid.SHORT,
  );
  taskListState.newTask.isLoading = false;
  taskListState.newTask.hasApiError = true;
};

// slice definition of task list Slice
export const slice = createSlice({
  name: TASK_LIST,
  initialState: <ITaskListState>{
    isLoading: false,
    list: {
      data: [],
      message: '',
      status: false,
    },
    newTask: {
      isLoading: false,
      hasApiError: false,
    },
  },
  reducers: {
    onApiFetchInitiate: onApiFetchInitiateReducer,
    onSuccessfullyDataFetched: onSuccessfullyDataFetchedReducer,
    onDataFetchFailure: onDataFetchFailureReducer,
    onNewTaskAddApiFetchInitiate: onNewTaskAddApiFetchInitiateReducer,
    onNewTaskAddSuccessfullyDataFetched:
      onNewTaskAddSuccessfullyDataFetchedReducer,
    onNewTaskAddDataFetchFailure: onNewTaskAddDataFetchFailureReducer,
  },
});

/**** selector  Start *****/

/**
 * returns task list list
 */
const getAllTaskList = () =>
  createSelector(
    (store: RootState) => store[TASK_LIST],
    (state: ITaskListState) => {
      return state?.list?.data || [];
    },
  );

const getTaskLoadingList = () =>
  createSelector(
    (store: RootState) => store[TASK_LIST],
    (state: ITaskListState) => {
      return state?.isLoading || false;
    },
  );

const getNewTaskLoadingStatus = () =>
  createSelector(
    (store: RootState) => store[TASK_LIST],
    (state: ITaskListState) => {
      return state?.newTask.isLoading || false;
    },
  );

const getNewTaskApiStatus = () =>
  createSelector(
    (store: RootState) => store[TASK_LIST],
    (state: ITaskListState) => {
      return state?.newTask?.hasApiError || false;
    },
  );

/*** Selector End ****/

/**
 * api call to load  all task list
 */
export const loadAllTaskList = () => () => {
  return apiDispatch({
    url: `tasks`,
    onStart: onApiFetchInitiate.type,
    onError: onDataFetchFailure.type,
    onSuccess: onSuccessfullyDataFetched.type,
    auth: true,
    method: HttpMethod.GET,
    cacheValidityDuration: CACHING_TIME.INVALIDATE,
  });
};

export const callAddNewTask = (task: string) => () => {
  return apiDispatch({
    url: `tasks`,
    onStart: onNewTaskAddApiFetchInitiate.type,
    onError: onNewTaskAddDataFetchFailure.type,
    onSuccess: onNewTaskAddSuccessfullyDataFetched.type,
    data: {task},
    auth: true,
    method: HttpMethod.POST,
    cacheValidityDuration: CACHING_TIME.INVALIDATE,
  });
};

const {
  onApiFetchInitiate,
  onSuccessfullyDataFetched,
  onDataFetchFailure,
  onNewTaskAddApiFetchInitiate,
  onNewTaskAddSuccessfullyDataFetched,
  onNewTaskAddDataFetchFailure,
} = slice.actions;

export {
  getAllTaskList,
  getTaskLoadingList,
  getNewTaskLoadingStatus,
  getNewTaskApiStatus,
};

export default slice.reducer;
