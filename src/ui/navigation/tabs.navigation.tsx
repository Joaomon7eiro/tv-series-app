import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import SeriesNavigation from './series.navigation';
import SearchNavigation from './search.navigation';
import FavoriteNavigation from './favorites.navigation';
import { theme } from '../styles/theme';

const Tab = createBottomTabNavigator();

const seriesTabIcon = ({ color }: { color: string }) => <Ionicons name="home" size={24} color={color} />;
const searchTabIcon = ({ color }: { color: string }) => <Ionicons name="search" size={24} color={color} />;
const favoriteTabIcon = ({ color }: { color: string }) => <Ionicons name="heart" size={24} color={color} />;
const tabBarBackground = () => (
  <View
    style={{ flex: 1, backgroundColor: theme.colors.background }}
  />

);
const TabNavigation: React.FC = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarInactiveTintColor: theme.colors.primary,
      tabBarActiveTintColor: theme.colors.light,
      tabBarBackground,
    }}
    initialRouteName="Home"
  >
    <Tab.Screen
      name="Home"
      component={SeriesNavigation}
      options={{
        tabBarIcon: seriesTabIcon,
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchNavigation}
      options={{
        tabBarIcon: searchTabIcon,
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={FavoriteNavigation}
      options={{
        tabBarIcon: favoriteTabIcon,
      }}
    />
  </Tab.Navigator>
);

export default TabNavigation;
