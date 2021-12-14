import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SeriesDetails } from '../pages/SeriesDetail/series-details.page';
import { SeriesPage } from '../pages/SeriesPage/series.page';
import { EpisodeDetails } from '../pages/EpisodeDetail/episode.page';

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

      <SeriesStack.Screen
        name="EpisodeDetails"
        component={EpisodeDetails}
      />
    </SeriesStack.Navigator>
  )
};

export default SeriesNavigation;