import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {log} from '@services/reactotron/reactotron-log';
import {
  callUserRegisterApi,
  getRegistrationLoadingStatus,
  getRegistrationApiSuccessStatus,
} from '@store/splices/auth-entity';

const useRegisterScreenViewController = () => {
  const [userName, onUserNameTextChanged] = useState('');
  const [password, onPasswordChangeText] = useState('');
  const [enableUpdateButton, updateLoginBtnEnableStatus] = useState(false);

  const apiSuccessStatus = useSelector(getRegistrationApiSuccessStatus);

  const isLoading = useSelector(getRegistrationLoadingStatus);

  const navigation = useNavigation();
  const route = useRoute();
  const {role = ''} = route.params || {};

  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    if (password.length > 4 && userName.length > 3) {
      updateLoginBtnEnableStatus(true);
    } else {
      updateLoginBtnEnableStatus(false);
    }
  }, [userName, password]);

  const onRegister = async () => {
    const result = await dispatch(
      callUserRegisterApi({
        userName: userName,
        password: password,
        userType: role,
      }),
    );

    log('onRegister result ', result);
  };

  useEffect(() => {
    if (apiSuccessStatus) {
      navigation.pop(2);
    }
  }, [apiSuccessStatus]);

  return {
    isLoading,
    userName,
    password,
    enableUpdateButton,
    role,
    onUserNameTextChanged,
    onPasswordChangeText,
    onRegister,
  };
};

export default useRegisterScreenViewController;
