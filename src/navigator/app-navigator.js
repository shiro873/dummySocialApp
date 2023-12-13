import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { navigationRef } from "./navigation-service";
import HomeScreen from "../containers/home";
import ProfileScreen from '../containers/profile';
import PostScreen from '../containers/post';

const BottomTab = createBottomTabNavigator();

export default AppNavigator = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <BottomTab.Navigator
            screenOptions={{
                headerShown: false,
                // tabBarActiveTintColor: 'rgba()'
            }}>
                <BottomTab.Screen name="Home" component={HomeScreen} />
                <BottomTab.Screen name="Profile" component={ProfileScreen} />
                <BottomTab.Screen name="Post" component={PostScreen} />
            </BottomTab.Navigator>
        </NavigationContainer>
    )
}