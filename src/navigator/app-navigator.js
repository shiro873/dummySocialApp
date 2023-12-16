import React, { useState, useEffect } from 'react';
import {
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// App Navigation
import * as NavigationService from './navigation-service';
import { navigationRef } from './navigation-service';


// screens
import Home from '../containers/Home';
import Post from '../containers/Post';
import Profile from '../containers/Profile';

// stacks & tabs
const BottomTab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <BottomTab.Navigator
        screenOptions={{
          headerShown: true,
        }}>
        <BottomTab.Screen
          options={{
            headerShown: true,
          }}
          name="Home"
          component={Home}
        />
        <BottomTab.Screen
          options={{
            headerShown: true,
          }}
          name="Post"
          component={Post}
        />
        <BottomTab.Screen
          options={{
            headerShown: true,
          }}
          name="Profile"
          component={Profile}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
