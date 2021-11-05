import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ListPage} from '../../pages/ListPage';
import {AccountPage} from '../../pages/AccountPage';
import {Colors} from '../common/Colors';

//Icons
import ListIcon from '../icons/ListIcon';
import AccountIcon from '../icons/AccountIcon';

export const Navigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        sceneContainerStyle={{backgroundColor: '#FAFAFA'}}
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#FAFAFA',
            elevation: 0,
            borderTopWidth: 0,
            height: 88,
          },
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.black,
          tabBarLabelStyle: {marginBottom: 20, fontWeight: 'bold'},
          tabBarIconStyle: {marginTop: 15, width: 0},
        }}>
        <Tab.Screen
          name="Home"
          component={ListPage}
          options={{
            tabBarIcon: ({color, size}) => <ListIcon />,
            title: 'List',
          }}
        />
        <Tab.Screen
          name="Settings"
          component={AccountPage}
          options={{
            tabBarIcon: ({color, size}) => <AccountIcon />,
            title: 'Account',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
