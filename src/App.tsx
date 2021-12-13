import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import store from './application/redux/store';
import AppNavigation from './ui/navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </SafeAreaProvider>
  );
}

