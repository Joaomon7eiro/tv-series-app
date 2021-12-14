import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { searchByName } from '../../../app/redux/actions/search.action';
import { useAppDispatch, useAppSelector } from '../../../hooks/custom-hooks';
import { SeriesItem } from '../../components/SeriesItem/series-item.component';

import {
  Container,
  SearchInput,
  SearchWrapper
} from './search.styles';

export function Search() {
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useAppDispatch();
  const series = useAppSelector(state => state.search.series);

  return (
    <Container>
      <FlatList
        data={series}
        keyExtractor={item => String(item.id)}
        ListHeaderComponent={
          <SearchWrapper>
            <SearchInput
              value={searchValue}
              placeholder='Search for series or artists'
              onSubmitEditing={() => dispatch(searchByName(searchValue))}
              onChangeText={setSearchValue}
            />
          </SearchWrapper>
        }
        contentContainerStyle={{
          paddingBottom: 12,
          marginHorizontal: 12
        }}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: 'space-between',
        }}
        numColumns={2}
        renderItem={({ item }) => {
          return <SeriesItem data={item} />
        }}
      />
    </Container>
  );
}