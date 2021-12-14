import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { getAllSeries } from '../../../app/redux/actions/series.action';
import { useAppDispatch, useAppSelector } from '../../../hooks/custom-hooks';
import { SeriesItem } from '../../components/SeriesItem/series-item.component';

import {
  Container,
  SeriesFlatlist,
  Title
} from './series.styles';

const SeriesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const series = useAppSelector(state => state.series);

  useEffect(() => {
    dispatch(getAllSeries());
  }, []);

  return (
    <Container>
      <FlatList
        data={series}
        keyExtractor={item => String(item.id)}
        ListHeaderComponent={() => <Title>TV SERIES</Title>}
        contentContainerStyle={{
          paddingBottom: 12,
          paddingTop: 60
        }}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: 'space-between',
        }}
        numColumns={3}
        renderItem={({ item }) => {
          return <SeriesItem data={item} />
        }}
      />
    </Container>
  );
}

export { SeriesPage };