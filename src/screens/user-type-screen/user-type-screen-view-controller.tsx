import {useNavigation} from '@react-navigation/native';

const useUserTypeScreenViewController = () => {
  const navigation = useNavigation();

  const onRoleSelected = (role: string) => {
    navigation.navigate('register', {role});
  };

  return {
    onRoleSelected,
  };
};

export default useUserTypeScreenViewController;
