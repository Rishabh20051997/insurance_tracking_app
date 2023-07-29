import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import BottomTabItem from './components/bottom-tab-item';
import {styles} from './bottom-tab-styles';
import {bottomTabOptions} from './constant';
import {TouchableOpacity} from 'react-native';
import UIText from '@widgets/ui-text';
import {FONT_TYPE} from '@theme/font';
import colors from '@resources/colors';
import {useNavigation} from '@react-navigation/native';

const BottomTab = createBottomTabNavigator<bottomTabParamList>();
const BottomTabBarNavigator = () => {
  const navigation = useNavigation();
  return (
    <>
      <BottomTab.Navigator
        screenOptions={() => ({
          tabBarStyle: {
            height: 60,
          },
          headerShown: false,
          headerStatusBarHeight: 0,
        })}>
        {bottomTabOptions.map(item => (
          //it will render screen by using list bottomTabOptions
          <BottomTab.Screen
            key={item.title}
            name={item.title as any}
            options={{
              headerShown: true,
              tabBarLabel: '',
              headerRightContainerStyle: styles.headerRightContainer,
              headerRight:
                item.title !== 'Employees'
                  ? () => null
                  : () => (
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('CreateEmployee');
                        }}>
                        <UIText
                          FontType={FONT_TYPE.HEADLINE_LARGE}
                          text={'+'}
                          color={colors.primary.cardinal}
                        />
                      </TouchableOpacity>
                    ),
              tabBarIcon: ({focused}) => {
                return (
                  <BottomTabItem
                    componentStyle={
                      focused
                        ? styles.labelFocusedContainer
                        : styles.labelContainer
                    }
                    icon={focused ? item.icon.active : item.icon.inActive}
                    height={24}
                    width={24}
                    iconStyle={styles.iconStyle}
                    textStyle={[
                      focused
                        ? styles.MyCourseLabel
                        : styles.MyCourseInActiveLabel,
                      styles.commonMyCourseLabel,
                    ]}
                    tabTitle={item.title}
                  />
                );
              },
            }}
            component={item.component}
          />
        ))}
      </BottomTab.Navigator>
    </>
  );
};

export default BottomTabBarNavigator;
