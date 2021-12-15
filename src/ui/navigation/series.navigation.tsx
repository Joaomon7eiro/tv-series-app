import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SeriesDetails } from '../pages/SeriesDetails/series-details.page';
import { SeriesPage } from '../pages/Series/series.page';
import { EpisodeDetails } from '../pages/EpisodeDetails/episode-details.page';

const SeriesStack = createNativeStackNavigator();

const SeriesNavigation: React.FC = () => (
  <SeriesStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="SeriesTab"
  >
    <SeriesStack.Screen
      name="SeriesTab"
      component={SeriesPage}
    />

    <SeriesStack.Screen
      name="SeriesDetails"
      component={SeriesDetails}
    />

    <SeriesStack.Screen
      name="EpisodeDetails"
      component={EpisodeDetails}
    />
  </SeriesStack.Navigator>
);

export default SeriesNavigation;
