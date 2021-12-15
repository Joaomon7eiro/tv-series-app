import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SeriesDetails } from '../pages/SeriesDetails/series-details.page';
import { EpisodeDetails } from '../pages/EpisodeDetails/episode-details.page';
import { Search } from '../pages/Search/search.page';

const FavoriteStack = createNativeStackNavigator();

const FavoriteNavigation: React.FC = () => (
  <FavoriteStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Favorites"
  >
    <FavoriteStack.Screen
      name="Favorites"
      component={Search}
    />

    <FavoriteStack.Screen
      name="SeriesDetails"
      component={SeriesDetails}
    />

    <FavoriteStack.Screen
      name="EpisodeDetails"
      component={EpisodeDetails}
    />
  </FavoriteStack.Navigator>
);

export default FavoriteNavigation;
