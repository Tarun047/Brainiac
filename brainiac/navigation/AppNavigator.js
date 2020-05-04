import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LogInScreen from '../screens/Login'

import MainTabNavigator from './MainTabNavigator';
const AuthStack = createStackNavigator({ LogIn: LogInScreen });

export default createAppContainer(
  
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    LogIn:AuthStack,
    Main: MainTabNavigator,

  },
  {
    initialRouteName: 'LogIn',
  })
);
