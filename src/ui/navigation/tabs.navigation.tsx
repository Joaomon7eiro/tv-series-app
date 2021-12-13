import React from 'react';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { SeriesPage } from "../pages/SeriesPage";


const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen
        name="SeriesHome"
        component={SeriesPage}
      />
      <Tab.Screen name="SeriesHome1" component={SeriesPage} />
      <Tab.Screen name="SeriesHome2" component={SeriesPage} />
    </Tab.Navigator>
  )
}

