import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {log} from '@services/reactotron/reactotron-log';
import {
  callAuthenticationApi,
  getAuthIsLoading,
} from '@store/splices/auth-entity';

const useLoginScreenViewController = () => {
  const [userName, onUserNameTextChanged] = useState('');
  const [password, onPasswordChangeText] = useState('');
  const [enableUpdateButton, updateLoginBtnEnableStatus] = useState(false);

  const isLoading = useSelector(getAuthIsLoading);

  const navigation = useNavigation();

  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    if (password.length > 4 && userName.length > 3) {
      updateLoginBtnEnableStatus(true);
    } else {
      updateLoginBtnEnableStatus(false);
    }
  }, [userName, password]);

  const onLogin = async () => {
    const result = await dispatch(
      callAuthenticationApi({
        userName: userName,
        password: password,
      }),
    );

    log('onLogin result ', result);
  };

  // TODO: resolve navigation typescript issue
  const onRegisterButtonPressed = () => {
    navigation.navigate('userType');
  };

  return {
    isLoading,
    userName,
    password,
    enableUpdateButton,
    onUserNameTextChanged,
    onPasswordChangeText,
    onLogin,
    onRegisterButtonPressed,
  };
};

export default useLoginScreenViewController;
