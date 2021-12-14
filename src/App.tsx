import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { OpenSans_600SemiBold, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import store from './app/redux/store';
import AppNavigation from './ui/navigation';
import { theme } from './ui/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
    OpenSans_600SemiBold,
    OpenSans_400Regular,
    OpenSans_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar style='dark' />
        <AppNavigation />
      </ThemeProvider>
    </Provider>
  );
}

