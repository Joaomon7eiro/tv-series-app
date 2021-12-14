import React from 'react';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { SeriesPage } from "../pages/SeriesPage/series.page";
import SeriesNavigation from './series.navigation';

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName='SeriesTab'
    >
      <Tab.Screen
        name="SeriesTab"
        component={SeriesNavigation}
        options={{
          tabBarIcon: () => <Ionicons name='home' size={24} />
        }}
      />
      <Tab.Screen
        name="Search"
        component={SeriesPage}
        options={{
          tabBarIcon: () => <Ionicons name='search' size={24} />
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={SeriesPage}
        options={{
          tabBarIcon: () => <Ionicons name='heart' size={24} />
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SeriesPage}
        options={{
          tabBarIcon: () => <Ionicons name='settings' size={24} />
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigation;
