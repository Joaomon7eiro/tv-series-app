import React, { useState } from 'react';
import { FlatList } from 'react-native';
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

  return (
    <Container>
      <SearchWrapper>
        <SearchInput
          value={searchValue}
          placeholder="Search for series or artists"
          onSubmitEditing={() => dispatch(searchSeriesByName(searchValue))}
          onChangeText={setSearchValue}
        />
      </SearchWrapper>
      <SearchTitleText>
        Series
      </SearchTitleText>
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
      <SearchTitleText>
        People
      </SearchTitleText>
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
    </Container>
  );
};
