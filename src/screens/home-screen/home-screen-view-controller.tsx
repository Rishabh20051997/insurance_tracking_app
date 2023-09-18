import {useNavigation} from '@react-navigation/native';
import {HOME_SCREEN_ITEM_KEYS} from './home-screen-view-constant';

const useHomeScreenViewController = () => {
  const navigation = useNavigation();
  const loadingStatus = false;

  const onActionCardClicked = (data: IHomeScreenItem) => {
    switch (data.key) {
      case HOME_SCREEN_ITEM_KEYS.NEW_TRACK:
        navigation.navigate('NewInsuranceTrack');
        break;

      default:
        navigation.navigate('EditEmployee', {
          user: data,
        });
    }
  };

  return {
    loadingStatus,
    onActionCardClicked,
  };
};

export default useHomeScreenViewController;
