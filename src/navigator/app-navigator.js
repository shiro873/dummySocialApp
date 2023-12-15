import React, { useState, useEffect } from 'react';
import {
  NavigationContainer,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// App Navigation
import * as NavigationService from './navigation-service';
import { navigationRef } from './navigation-service';

// stacks & tabs
const BottomTab = createBottomTabNavigator();

// screens
import Home from '../containers/Home';
import Post from '../containers/Post';
import Profile from '../containers/Profile';

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <BottomTab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <BottomTab.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
        <BottomTab.Screen
          options={{
            headerShown: false,
          }}
          name="Post"
          component={Post}
        />
        <BottomTab.Screen
          options={{
            headerShown: false,
          }}
          name="Profile"
          component={Profile}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
