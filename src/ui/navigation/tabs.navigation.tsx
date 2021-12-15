import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import SeriesNavigation from './series.navigation';
import SearchNavigation from './search.navigation';
import FavoriteNavigation from './favorites.navigation';

const Tab = createBottomTabNavigator();

const seriesTabIcon = () => <Ionicons name="home" size={24} />;
const searchTabIcon = () => <Ionicons name="search" size={24} />;
const favoriteTabIcon = () => <Ionicons name="heart" size={24} />;

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
      name="FavoritesTab"
      component={FavoriteNavigation}
      options={{
        tabBarIcon: favoriteTabIcon,
      }}
    />
  </Tab.Navigator>
);

export default TabNavigation;
