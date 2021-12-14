import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { getAllSeries } from '../../../app/redux/actions/series.action';
import { useAppDispatch, useAppSelector } from '../../../hooks/custom-hooks';
import { SeriesItem } from '../../components/SeriesItem/series-item.component';

import {
  Container,
  SeriesFlatlist,
  Title,
} from './series.styles';

const SeriesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const series = useAppSelector(state => state.series);
  const ui = useAppSelector(state => state.ui);

  const [page, setPage] = useState(0);

  useEffect(() => {
    loadSeries();
  }, []);

  const loadSeries = () => {
    dispatch(getAllSeries(page));
    setPage(page + 1);
  }

  const handleOnEndReached = () => {
    loadSeries();
  }

  return (
    <Container>
      <FlatList
        data={series}
        keyExtractor={item => String(item.id)}
        ListHeaderComponent={() => <Title>TV SERIES</Title>}
        ListFooterComponent={() => ui.pending ? <ActivityIndicator /> : null}
        contentContainerStyle={{
          paddingBottom: 12,
          paddingTop: 60
        }}
        numColumns={3}
        renderItem={({ item }) => {
          return <SeriesItem data={item} />
        }}
        onEndReached={handleOnEndReached}
        onEndReachedThreshold={0.08}
      />
    </Container>
  );
}

export { SeriesPage };