import BottomTabBarNavigator from '@navigators/bottom-tab-navigator';
import EditEmployeeScreen from '@screens/edit-employee-screen';
import NewInsuranceTrackScreen from '@screens/new-insurance-track-screen';
import TaskListScreen from '@screens/task-list-screen';

export const CONST_POST_AUTH_COMPONENTS: IRoutesProps[] = [
  {
    name: 'BottomNavigator',
    title: '',
    component: BottomTabBarNavigator,
    headerShown: false,
  },
  {
    name: 'NewInsuranceTrack',
    title: 'Create New Insurance Entry',
    component: NewInsuranceTrackScreen,
    headerShown: true,
  },
  {
    name: 'EditEmployee',
    title: 'Edit Employee',
    component: EditEmployeeScreen,
    headerShown: true,
  },
  {
    name: 'TaskListScreen',
    title: 'Things To Learn',
    component: TaskListScreen,
    headerShown: true,
  },
];
