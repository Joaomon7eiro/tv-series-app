import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SeriesPage } from '../pages/SeriesPage/series.page';
import SeriesNavigation from './series.navigation';
import SearchNavigation from './search.navigation';

const Tab = createBottomTabNavigator();

const seriesTabIcon = () => <Ionicons name="home" size={24} />;
const searchTabIcon = () => <Ionicons name="search" size={24} />;
const favoriteTabIcon = () => <Ionicons name="heart" size={24} />;
const settingsTabIcon = () => <Ionicons name="heart" size={24} />;

const TabNavigation: React.FC = () => (

  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="SeriesTab"
  >
    <Tab.Screen
      name="SeriesTab"
      component={SeriesNavigation}
      options={{
        tabBarIcon: seriesTabIcon,
      }}
    />
    <Tab.Screen
      name="SearchTab"
      component={SearchNavigation}
      options={{
        tabBarIcon: searchTabIcon,
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={SeriesPage}
      options={{
        tabBarIcon: favoriteTabIcon,
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SeriesPage}
      options={{
        tabBarIcon: settingsTabIcon,
      }}
    />
  </Tab.Navigator>
);

export default TabNavigation;
