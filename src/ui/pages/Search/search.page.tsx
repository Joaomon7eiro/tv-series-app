import React, { useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';
import { useSearch } from '../../../hooks/search.hook';
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
  const [searchTerm, setSearchTerm] = useState('');

  const { colors } = useTheme();

  const { data, isLoading } = useSearch(searchTerm);
  const { people, series } = data || {};

  return (
    <Container
      colors={[colors.primaryDark, 'rgb(75, 86, 96)', colors.primaryDark, 'rgb(26, 32, 38)']}
      start={{ x: 0.1, y: 0.2 }}
    >
      <SafeAreaView>
        <SearchWrapper>
          <SearchInput
            value={searchValue}
            placeholder="Search for series and artists"
            onSubmitEditing={() => setSearchTerm(searchValue)}
            onChangeText={setSearchValue}
          />
        </SearchWrapper>

        {isLoading
          ? <ActivityIndicator color={colors.primary} />
          : null}

        {series?.length
          ? (
            <>
              <SearchTitleText>
                Series
              </SearchTitleText>
              <FlatList
                data={series}
                keyExtractor={(item, index) => String(item.id) + String(index)}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingHorizontal: 12,
                }}
                renderItem={({ item }) => <SeriesItem data={item} hasFixedSize />}
              />
            </>
          ) : null}

        {people?.length
          ? (
            <>
              <SearchTitleText>
                People
              </SearchTitleText>
              <FlatList
                data={people}
                keyExtractor={(item, index) => String(item.id) + String(index)}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingHorizontal: 12,
                }}
                renderItem={({ item }) => <PersonItem data={item} />}
              />
            </>
          ) : null}

      </SafeAreaView>

    </Container>
  );
};
