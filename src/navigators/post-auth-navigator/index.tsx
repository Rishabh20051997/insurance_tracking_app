import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CONST_POST_AUTH_COMPONENTS} from './constants';

const PostAuthStack = createStackNavigator<postAuthParamList>();

const PostAuthNavigator = () => {
  return (
    <PostAuthStack.Navigator initialRouteName={'BottomNavigator'}>
      <PostAuthStack.Group>
        {CONST_POST_AUTH_COMPONENTS.map(item => (
          <PostAuthStack.Screen
            key={item.name}
            options={{
              headerTitle: item.title,
              headerShown:
                item.headerShown != undefined ? item.headerShown : true,
              title: item.title,
            }}
            name={item.name as keyof postAuthParamList}
            component={item.component}
          />
        ))}
      </PostAuthStack.Group>
    </PostAuthStack.Navigator>
  );
};

export default PostAuthNavigator;
