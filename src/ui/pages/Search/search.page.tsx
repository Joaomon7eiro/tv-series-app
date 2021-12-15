import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';
import { searchSeriesByName } from '../../../app/redux/actions/search.action';
import { useAppDispatch, useAppSelector } from '../../../hooks/custom-hooks';
import { PersonItem } from '../../components/PersonItem/person-item.component';
import { SeriesItem } from '../../components/SeriesItem/series-item.component';

import {
  Container,
  SearchInput,
  SearchWrapper,
  SearchTitleText,
} from './search.styles';

export const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search);

  const { colors } = useTheme();

  return (
    <Container
      colors={[colors.primaryDark, 'rgb(75, 86, 96)', colors.primaryDark, 'rgb(26, 32, 38)']}
      start={{ x: 0.1, y: 0.2 }}
    >
      <SafeAreaView>

        <SearchWrapper>
          <SearchInput
            value={searchValue}
            placeholder="Search for series or artists"
            onSubmitEditing={() => dispatch(searchSeriesByName(searchValue))}
            onChangeText={setSearchValue}
          />
        </SearchWrapper>

        {search.series?.length
          ? (
            <SearchTitleText>
              Series
            </SearchTitleText>
          ) : null}

        <FlatList
          data={search.series}
          keyExtractor={(item) => String(item.id)}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 12,
          }}
          renderItem={({ item }) => <SeriesItem data={item} hasFixedSize />}
        />
        {search.people?.length
          ? (
            <SearchTitleText>
              People
            </SearchTitleText>
          ) : null}

        <FlatList
          data={search.people}
          keyExtractor={(item) => String(item.id)}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 12,
          }}
          renderItem={({ item }) => <PersonItem data={item} />}
        />
      </SafeAreaView>

    </Container>
  );
};
