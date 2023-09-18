import {useCallback, useReducer} from 'react';
import { ACTION_NAME, FIELD_TYPE, INITIAL_DATA_STATE } from './new-insurance-track-constant';
import { ToastAndroid } from 'react-native';

const initialState: State = {
  dataList: INITIAL_DATA_STATE,
};

const reducer = (currentState: State, action: Dispatcher) => {
  const itemIndex = currentState.dataList.findIndex(
    item => action.type === item.actionName,
  );

  if (itemIndex >= 0) {
    const itemSelected = currentState.dataList[itemIndex];
    itemSelected.value = action.payload;
    itemSelected.error = '';
    currentState.dataList[itemIndex] = itemSelected;
    return {...currentState};
  } else if(action.type === ACTION_NAME.UPDATE_LIST) {
    currentState.dataList = action.payload
    return {...currentState};
  }
  return currentState;
};

const useNewInsuranceTrackScreenViewController = () => {
  const [state, updateState]: [State, (value: Dispatcher) => void] = useReducer(
    reducer,
    initialState,
  );

const validateForm = () => {
  const dataList = state.dataList
  let hasIssue = false
  dataList.forEach(item=> {
    // TODO: implement regex
    if(!item.isRequired || item.value.toString().length > 3) {

    } else {
      hasIssue = true
      item.error = 'Please enter valid value'
    }
  })

  if(hasIssue) {
    updateState({
      type: ACTION_NAME.UPDATE_LIST,
      payload: dataList,
    })
  }

  return !hasIssue
}

  const onSubmit = async () => {
    const isValidForm = validateForm()
    if(isValidForm) {

    } else {
    ToastAndroid.show('Please Fill Form Correctly', ToastAndroid.SHORT)

    }
  };

  const updateTextValue = useCallback((actionName: any, value: string) => {
    updateState({
      type: actionName,
      payload: value,
    });
  }, [])

  const updateDateValue = useCallback((actionName: any, value: string) => {
    updateState({
      type: actionName,
      payload: value,
    });
  }, [])

  return {
    dataList: state.dataList,
    updateState,
    onSubmit,
    updateTextValue,
    updateDateValue
  };
};

export default useNewInsuranceTrackScreenViewController;
