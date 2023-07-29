import {useNavigation} from '@react-navigation/native';
import authService from '@services/auth-services';
import {getAuthTokens} from '@store/splices/auth-entity';
import {useSelector} from 'react-redux';

const useMoreScreenViewController = () => {
  const authToken = useSelector(getAuthTokens);

  const navigation = useNavigation();

  const onThingsToLearnPressed = () => {
    navigation.navigate('TaskListScreen');
  };

  const onLogout = () => {
    authService.logout(authToken.refreshToken);
  };

  return {
    onLogout,
    onThingsToLearnPressed,
  };
};

export default useMoreScreenViewController;
