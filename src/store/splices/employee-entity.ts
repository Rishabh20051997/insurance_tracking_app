import {createSelector, createSlice} from '@reduxjs/toolkit';
import apiDispatch from '@store/util/dispatch';
import {SLICE_NAME} from '@store/constant';
import {HttpMethod} from '@secure-access-control/client';
import {CACHING_TIME} from '@store/enum';
import {log} from '@services/reactotron/reactotron-log';
import {ToastAndroid} from 'react-native';

const EMPLOYEE_SLICE = SLICE_NAME.EMPLOYEE;

/**
 *
 * @param item employee item received from server
 * @returns {IEmployeeItem} data required
 */
const formatEmployeeData = (item: LooseObject) => {
  const {_id, firstname, lastname} = item;

  return {
    _id,
    firstName: firstname,
    lastName: lastname,
  } as IEmployeeItem;
};

// called by apiDispatch to initiate api call
const onApiFetchInitiateReducer = (employeeListState: IEmployeeListState) => {
  employeeListState.isLoading = true;
  // employeeListState.list = {}
};

// called by apiDispatch on success of api call with payload
const onSuccessfullyDataFetchedReducer = (
  employeeListState: IEmployeeListState,
  {payload}: {payload: LooseObject},
) => {
  const {data: dataList = [], message = '', status = false} = payload;
  const formattedData = dataList.map(formatEmployeeData);
  const finalData = {
    data: formattedData,
    message,
    status,
  };

  employeeListState.isLoading = false;
  employeeListState.list = finalData;
};

// called by apiDispatch on failure of api call with payload
const onDataFetchFailureReducer = (employeeListState: IEmployeeListState) => {
  employeeListState.isLoading = false;
};

const onCreateNewApiStartReducer = (employeeListState: IEmployeeListState) => {
  employeeListState.newEmployeeData.isLoading = true;
  employeeListState.newEmployeeData.hasApiError = false;
};

const onCreateNewApiSuccessReducer = (
  employeeListState: IEmployeeListState,
  {payload}: {payload: LooseObject},
) => {
  // const { data } = payload
  const {message, data} = payload;

  ToastAndroid.show(message || 'Success', ToastAndroid.SHORT);
  const newUser = formatEmployeeData(data);
  employeeListState.list.data = [...employeeListState.list.data, newUser];
  // const newData = formatEmployeeData(data)
  employeeListState.newEmployeeData.isLoading = false;
  employeeListState.newEmployeeData.hasApiError = false;
};

const onCreateNewApiFailReducer = (
  employeeListState: IEmployeeListState,
  {payload}: {payload: LooseObject},
) => {
  ToastAndroid.show(
    payload?.error || payload?.message || 'Something Went Wrong',
    ToastAndroid.SHORT,
  );
  employeeListState.newEmployeeData.isLoading = false;
  employeeListState.newEmployeeData.hasApiError = true;
};

const onUpdateEmployeeApiStartReducer = (
  employeeListState: IEmployeeListState,
) => {
  employeeListState.updateEmployeeData.isLoading = true;
  employeeListState.updateEmployeeData.hasApiError = false;
};

const onUpdateEmployeeApiSuccessReducer = (
  employeeListState: IEmployeeListState,
  {payload}: {payload: LooseObject},
) => {
  // const { data } = payload
  const {message, data} = payload;
  log('payload', payload);
  ToastAndroid.show(message || 'Success', ToastAndroid.SHORT);
  const newUser = formatEmployeeData(data);

  log(
    'employeeListState.list.data before : ',
    employeeListState.list.data,
    newUser,
  );
  employeeListState.list.data.forEach(item => {
    if (item._id === newUser._id) {
      item.firstName = newUser.firstName;
      item.lastName = newUser.lastName;
    }
  });
  log('employeeListState.list.data after : ', employeeListState.list.data);
  employeeListState.updateEmployeeData.isLoading = false;
  employeeListState.updateEmployeeData.hasApiError = false;
};

const onUpdateEmployeeApiFailReducer = (
  employeeListState: IEmployeeListState,
  {payload}: {payload: LooseObject},
) => {
  ToastAndroid.show(
    payload?.error ||
      payload?.message ||
      payload?.data?.error ||
      payload?.data?.message ||
      'Something Went Wrong',
    ToastAndroid.SHORT,
  );
  employeeListState.updateEmployeeData.isLoading = false;
  employeeListState.updateEmployeeData.hasApiError = true;
};

const onDeleteEmployeeApiStartReducer = (
  employeeListState: IEmployeeListState,
) => {
  employeeListState.deleteEmployeeData.isLoading = true;
  employeeListState.deleteEmployeeData.hasApiError = false;
};

const onDeleteEmployeeApiSuccessReducer = (
  employeeListState: IEmployeeListState,
  {payload}: {payload: LooseObject},
) => {
  const {message, data} = payload;
  log('onDeleteEmployeeApiFailReducer', payload);
  const newUser = formatEmployeeData(data);
  const newEmployeeList = employeeListState.list?.data?.filter(
    item => item._id !== newUser._id,
  );
  log('newEmployeeList', newEmployeeList, newUser);

  employeeListState.list.data = newEmployeeList;
  employeeListState.deleteEmployeeData.isLoading = false;
  employeeListState.deleteEmployeeData.hasApiError = false;
};

const onDeleteEmployeeApiFailReducer = (
  employeeListState: IEmployeeListState,
  {payload}: {payload: LooseObject},
) => {
  ToastAndroid.show(
    payload?.data?.error || payload?.data?.message || 'Something Went Wrong',
    ToastAndroid.SHORT,
  );

  employeeListState.deleteEmployeeData.isLoading = false;
  employeeListState.deleteEmployeeData.hasApiError = true;
};

// slice definition of employee list Slice
export const slice = createSlice({
  name: EMPLOYEE_SLICE,
  initialState: <IEmployeeListState>{
    isLoading: false,
    list: {
      data: [],
      message: '',
      status: false,
    },
    newEmployeeData: {
      isLoading: false,
      hasApiError: false,
    },
    updateEmployeeData: {
      isLoading: false,
      hasApiError: false,
    },
    deleteEmployeeData: {
      isLoading: false,
      hasApiError: false,
    },
  },
  reducers: {
    onApiFetchInitiate: onApiFetchInitiateReducer,
    onSuccessfullyDataFetched: onSuccessfullyDataFetchedReducer,
    onDataFetchFailure: onDataFetchFailureReducer,
    onCreateNewApiStart: onCreateNewApiStartReducer,
    onCreateNewApiSuccess: onCreateNewApiSuccessReducer,
    onCreateNewApiFail: onCreateNewApiFailReducer,

    onUpdateEmployeeApiStart: onUpdateEmployeeApiStartReducer,
    onUpdateEmployeeApiSuccess: onUpdateEmployeeApiSuccessReducer,
    onUpdateEmployeeApiFail: onUpdateEmployeeApiFailReducer,

    onDeleteEmployeeApiStart: onDeleteEmployeeApiStartReducer,
    onDeleteEmployeeApiSuccess: onDeleteEmployeeApiSuccessReducer,
    onDeleteEmployeeApiFail: onDeleteEmployeeApiFailReducer,
  },
});

/**** selector  Start *****/

/**
 * returns employee list list
 */
const getAllEmployeeList = () =>
  createSelector(
    (store: RootState) => store[EMPLOYEE_SLICE],
    (state: IEmployeeListState) => {
      return state?.list?.data || [];
    },
  );

const getEmployeeListLoadingStatus = () =>
  createSelector(
    (store: RootState) => store[EMPLOYEE_SLICE],
    (state: IEmployeeListState) => {
      return state?.isLoading || false;
    },
  );

const getCreatingEmployeeLoadingStatus = () =>
  createSelector(
    (store: RootState) => store[EMPLOYEE_SLICE],
    (state: IEmployeeListState) => {
      return state?.newEmployeeData?.isLoading || false;
    },
  );

const getCreatingEmployeeApiStatus = () =>
  createSelector(
    (store: RootState) => store[EMPLOYEE_SLICE],
    (state: IEmployeeListState) => {
      return state?.newEmployeeData?.hasApiError || false;
    },
  );

const getUpdatingEmployeeLoadingStatus = () =>
  createSelector(
    (store: RootState) => store[EMPLOYEE_SLICE],
    (state: IEmployeeListState) => {
      return state?.updateEmployeeData?.isLoading || false;
    },
  );

const getUpdatingEmployeeApiStatus = () =>
  createSelector(
    (store: RootState) => store[EMPLOYEE_SLICE],
    (state: IEmployeeListState) => {
      return state?.updateEmployeeData?.hasApiError || false;
    },
  );

const getDeletingEmployeeLoadingStatus = () =>
  createSelector(
    (store: RootState) => store[EMPLOYEE_SLICE],
    (state: IEmployeeListState) => {
      return state?.deleteEmployeeData?.isLoading || false;
    },
  );

const getDeleteEmployeeApiStatus = () =>
  createSelector(
    (store: RootState) => store[EMPLOYEE_SLICE],
    (state: IEmployeeListState) => {
      return state?.deleteEmployeeData?.hasApiError || false;
    },
  );

/*** Selector End ****/

/**
 * api call to load  all employee list
 */
export const loadAllEmployeeList = () => () => {
  return apiDispatch({
    url: `employees`,
    onStart: onApiFetchInitiate.type,
    onError: onDataFetchFailure.type,
    onSuccess: onSuccessfullyDataFetched.type,
    auth: true,
    method: HttpMethod.GET,
    cacheValidityDuration: CACHING_TIME.INVALIDATE,
  });
};

/**
 * api call to add new employee
 */
export const callCreateNewEmployeeApi = (user: IEmployeeItem) => () => {
  return apiDispatch({
    url: `employees`,
    data: {
      firstname: user.firstName,
      lastname: user.lastName,
    },
    onStart: onCreateNewApiStart.type,
    onError: onCreateNewApiFail.type,
    onSuccess: onCreateNewApiSuccess.type,
    auth: true,
    method: HttpMethod.POST,
    cacheValidityDuration: CACHING_TIME.INVALIDATE,
  });
};

/**
 * api call update existing employee
 */
export const callUpdateEmployeeApi = (user: IEmployeeItem) => () => {
  return apiDispatch({
    url: `employees`,
    data: {
      id: user._id,
      firstname: user.firstName,
      lastname: user.lastName,
    },
    onStart: onUpdateEmployeeApiStart.type,
    onError: onUpdateEmployeeApiFail.type,
    onSuccess: onUpdateEmployeeApiSuccess.type,
    auth: true,
    method: HttpMethod.PUT,
    cacheValidityDuration: CACHING_TIME.INVALIDATE,
  });
};

/**
 * api call update existing employee
 */
export const callDeleteEmployeeApi = (user: IEmployeeItem) => () => {
  return apiDispatch({
    url: `employees`,
    data: {id: user._id},
    onStart: onDeleteEmployeeApiStart.type,
    onError: onDeleteEmployeeApiFail.type,
    onSuccess: onDeleteEmployeeApiSuccess.type,
    auth: true,
    method: HttpMethod.DELETE,
    cacheValidityDuration: CACHING_TIME.INVALIDATE,
  });
};

const {
  onApiFetchInitiate,
  onSuccessfullyDataFetched,
  onDataFetchFailure,
  onCreateNewApiStart,
  onCreateNewApiSuccess,
  onCreateNewApiFail,
  onUpdateEmployeeApiStart,
  onUpdateEmployeeApiSuccess,
  onUpdateEmployeeApiFail,
  onDeleteEmployeeApiStart,
  onDeleteEmployeeApiSuccess,
  onDeleteEmployeeApiFail,
} = slice.actions;

export {
  getAllEmployeeList,
  getEmployeeListLoadingStatus,
  getCreatingEmployeeLoadingStatus,
  getCreatingEmployeeApiStatus,
  getUpdatingEmployeeLoadingStatus,
  getUpdatingEmployeeApiStatus,
  getDeletingEmployeeLoadingStatus,
  getDeleteEmployeeApiStatus,
};

export default slice.reducer;
