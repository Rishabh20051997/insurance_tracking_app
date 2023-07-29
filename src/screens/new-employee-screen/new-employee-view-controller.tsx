import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  callCreateNewEmployeeApi,
  getCreatingEmployeeApiStatus,
  getCreatingEmployeeLoadingStatus,
} from '@store/splices/employee-entity';

const useNewEmployeeScreenViewController = () => {
  const [firstName, onFirstNameTextChanged] = useState('');
  const [lastName, onLastNameTextChanged] = useState('');
  const [enableUpdateButton, updateLoginBtnEnableStatus] = useState(false);

  const loadingStatus = useSelector(getCreatingEmployeeLoadingStatus());
  const apiStatus = useSelector(getCreatingEmployeeApiStatus());

  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    if (loadingStatus === false && apiStatus === false) {
      onFirstNameTextChanged('');
      onLastNameTextChanged('');
    }
  }, [loadingStatus, apiStatus]);

  useEffect(() => {
    if (firstName.length > 2 && lastName.length > 2) {
      updateLoginBtnEnableStatus(true);
    } else {
      updateLoginBtnEnableStatus(false);
    }
  }, [firstName, lastName]);

  const onSubmit = async () => {
    dispatch(
      callCreateNewEmployeeApi({
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

export default useNewEmployeeScreenViewController;
