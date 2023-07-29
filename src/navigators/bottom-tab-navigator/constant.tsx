import {
  ACTIVE_HOME_ICON,
  INACTIVE_HOME_ICON,
  ACTIVE_MY_COURSE_ICON,
  IN_ACTIVE_MY_COURSE_ICON,
} from '@resources/icons/navigator-icons';
import HomeScreen from '@screens/home-screen';
import MoreScreen from '@screens/more-screen';

export const bottomTabOptions: IBottomTabOptions[] = [
  {
    title: 'Employees',
    icon: {
      active: ACTIVE_HOME_ICON,
      inActive: INACTIVE_HOME_ICON,
    },
    component: HomeScreen,
  },
  {
    title: 'More',
    icon: {
      active: ACTIVE_MY_COURSE_ICON,
      inActive: IN_ACTIVE_MY_COURSE_ICON,
    },
    component: MoreScreen,
  },
];
