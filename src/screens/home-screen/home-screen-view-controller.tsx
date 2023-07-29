import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  callDeleteEmployeeApi,
  getAllEmployeeList,
  getEmployeeListLoadingStatus,
  loadAllEmployeeList,
} from '@store/splices/employee-entity';
import {Alert} from 'react-native';

const useHomeScreenViewController = () => {
  const navigation = useNavigation();

  const employeeList = useSelector(getAllEmployeeList());

  const employeeLoadingStatus = useSelector(getEmployeeListLoadingStatus());

  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch(loadAllEmployeeList());
  }, []);

  const onDeleteConfirmed = (data: IEmployeeItem) => {
    dispatch(
      callDeleteEmployeeApi({
        ...data,
      }),
    );
  };

  const onDeleteButtonPressed = (data: IEmployeeItem) => {
    Alert.alert('Are you sure want to Delete this User?', '', [
      {
        text: 'Cancel',
        style: 'cancel',
        onPress: () => {},
      },
      {
        text: 'OK',
        // style: 'cancel',
        onPress: () => onDeleteConfirmed(data),
      },
    ]);
  };

  const onEditButtonPressed = (data: IEmployeeItem) => {
    navigation.navigate('EditEmployee', {
      user: data,
    });
  };

  return {
    employeeList,
    employeeLoadingStatus,
    onDeleteButtonPressed,
    onEditButtonPressed,
  };
};

export default useHomeScreenViewController;
