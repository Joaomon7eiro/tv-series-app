import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { OpenSans_600SemiBold, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import { QueryClient, QueryClientProvider } from 'react-query';
import AppNavigation from './ui/navigation';
import { FavoritesContextProvider } from './hooks/favorites.context';
import { theme } from './ui/styles/theme';

const queryClient = new QueryClient();

const App = () => {
  const [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
    OpenSans_600SemiBold,
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesContextProvider>
        <ThemeProvider theme={theme}>
          <StatusBar style="light" />
          <AppNavigation />
        </ThemeProvider>
      </FavoritesContextProvider>
    </QueryClientProvider>
  );
};

export default App;
