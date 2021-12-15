import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SeriesDetails } from '../pages/SeriesDetails/series-details.page';
import { EpisodeDetails } from '../pages/EpisodeDetails/episode-details.page';
import { Search } from '../pages/Search/search.page';
import { PersonDetails } from '../pages/PersonDetails/person-details.page';

const SearchStack = createNativeStackNavigator();

const SearchNavigation: React.FC = () => (
  <SearchStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="SearchTab"
  >
    <SearchStack.Screen
      name="SearchTab"
      component={Search}
    />

    <SearchStack.Screen
      name="SeriesDetails"
      component={SeriesDetails}
    />

    <SearchStack.Screen
      name="EpisodeDetails"
      component={EpisodeDetails}
    />

    <SearchStack.Screen
      name="PersonDetails"
      component={PersonDetails}
    />
  </SearchStack.Navigator>
);

export default SearchNavigation;
