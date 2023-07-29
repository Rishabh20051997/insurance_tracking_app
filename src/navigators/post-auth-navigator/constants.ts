import BottomTabBarNavigator from '@navigators/bottom-tab-navigator';
import EditEmployeeScreen from '@screens/edit-employee-screen';
import NewEmployeeScreen from '@screens/new-employee-screen';
import TaskListScreen from '@screens/task-list-screen';

export const CONST_POST_AUTH_COMPONENTS: IRoutesProps[] = [
  {
    name: 'BottomNavigator',
    title: '',
    component: BottomTabBarNavigator,
    headerShown: false,
  },
  {
    name: 'CreateEmployee',
    title: 'Create Employee',
    component: NewEmployeeScreen,
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
