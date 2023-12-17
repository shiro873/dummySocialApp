import React, { useState, useEffect } from 'react';
import {
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// App Navigation
import * as NavigationService from '../services/navigation-service';
import { navigationRef } from '../services/navigation-service';


// screens
import Home from '../containers/Home';
import Post from '../containers/Post';
import Profile from '../containers/Profile';
import Login from '../containers/Login';
import Register from '../containers/Register';

// stacks & tabs
const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: true,
      }}
      initialRouteName='Home'
    >
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
  )
}

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName='Login'
      >
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name='Login'
          component={Login}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name='Register'
          component={Register}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name='HomeStack'
          component={BottomTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
