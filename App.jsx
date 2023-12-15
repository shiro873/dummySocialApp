/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AppNavigator from './src/navigator/app-navigator';

function App() {
  return (
    <SafeAreaView>
      <AppNavigator />
    </SafeAreaView>
  );
}

export default App;
