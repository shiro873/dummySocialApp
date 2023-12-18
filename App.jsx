/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppNavigator from './src/navigator/app-navigator';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <AppNavigator testID="app-component" />
    </Provider>
  );
}

export default App;
