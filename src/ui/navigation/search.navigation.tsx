import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SeriesDetails } from '../pages/SeriesDetail/series-details.page';
import { EpisodeDetails } from '../pages/EpisodeDetail/episode.page';
import { Search } from '../pages/Search/search.page';

const SearchStack = createNativeStackNavigator();

const SearchNavigation: React.FC = () => {
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName='Search'
    >
      <SearchStack.Screen
        name="Search"
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
    </SearchStack.Navigator>
  )
};

export default SearchNavigation;