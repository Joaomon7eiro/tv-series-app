import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SeriesDetails } from '../pages/SeriesDetail/series-details.page';
import { SeriesPage } from '../pages/SeriesPage/series.page';

const SeriesStack = createNativeStackNavigator();

const SeriesNavigation: React.FC = () => {
  return (
    <SeriesStack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName='Series'
    >
      <SeriesStack.Screen
        name="Series"
        component={SeriesPage}
      />

      <SeriesStack.Screen
        name="SeriesDetails"
        component={SeriesDetails}
      />
    </SeriesStack.Navigator>
  )
};

export default SeriesNavigation;