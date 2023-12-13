import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import store, {persistor} from './src/redux/store';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import { OrientationLocker, PORTRAIT } from 'react-native-orientation-locker';
import AppNavigator from './src/navigator/app-navigator';

export default function App() {
  console.log('inside app')
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <OrientationLocker orientation={PORTRAIT} />
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}