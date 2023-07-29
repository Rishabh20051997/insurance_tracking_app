import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  callUpdateEmployeeApi,
  getUpdatingEmployeeApiStatus,
  getUpdatingEmployeeLoadingStatus,
} from '@store/splices/employee-entity';
import {useRoute} from '@react-navigation/native';
import {log} from '@services/reactotron/reactotron-log';

const useEditEmployeeScreenViewController = () => {
  const route = useRoute();
  const {
    user: {
      _id = '',
      firstName: currentFirstName = '',
      lastName: currentLastName = '',
    } = {},
  } = route.params;

  log('user : ', currentLastName, currentFirstName, route.params);
  const [firstName, onFirstNameTextChanged] = useState(currentFirstName);
  const [lastName, onLastNameTextChanged] = useState(currentLastName);
  const [enableUpdateButton, updateLoginBtnEnableStatus] = useState(false);

  const loadingStatus = useSelector(getUpdatingEmployeeLoadingStatus());
  const apiStatus = useSelector(getUpdatingEmployeeApiStatus());

  const dispatch = useDispatch<Dispatch>();

  // useEffect(() => {
  //   if (loadingStatus === false && apiStatus === false) {
  //     onFirstNameTextChanged('')
  //     onLastNameTextChanged('')
  //   }
  // }, [loadingStatus, apiStatus])

  useEffect(() => {
    if (firstName.length > 2 && lastName.length > 2) {
      updateLoginBtnEnableStatus(true);
    } else {
      updateLoginBtnEnableStatus(false);
    }
  }, [firstName, lastName]);

  const onSubmit = async () => {
    dispatch(
      callUpdateEmployeeApi({
        _id: _id,
        firstName,
        lastName,
      }),
    );
  };

  return {
    firstName,
    lastName,
    enableUpdateButton,
    loadingStatus,
    onFirstNameTextChanged,
    onLastNameTextChanged,
    onSubmit,
  };
};

export default useEditEmployeeScreenViewController;
