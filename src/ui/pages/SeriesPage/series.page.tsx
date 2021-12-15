import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { getAllSeries } from '../../../app/redux/actions/series.action';
import { useAppDispatch, useAppSelector } from '../../../hooks/custom-hooks';
import { SeriesItem } from '../../components/SeriesItem/series-item.component';

import {
  Container,
  Title,
} from './series.styles';

const SeriesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const series = useAppSelector((state) => state.series);
  const ui = useAppSelector((state) => state.ui);

  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(getAllSeries(page));
  }, [dispatch, page]);

  const handleOnEndReached = () => {
    if (!ui.pending) {
      setPage(page + 1);
    }
  };

  const listHeaderComponent = () => (<Title>TV SERIES</Title>);
  const listFooterComponent = () => (ui.pending ? <ActivityIndicator /> : null);

  return (
    <Container>
      <FlatList
        data={series}
        keyExtractor={(item) => String(item.id)}
        ListHeaderComponent={listHeaderComponent}
        ListFooterComponent={listFooterComponent}
        contentContainerStyle={{
          paddingBottom: 12,
          paddingTop: 60,
        }}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: 'space-between',
        }}
        numColumns={3}
        renderItem={({ item }) => <SeriesItem data={item} />}
        onEndReached={handleOnEndReached}
        onEndReachedThreshold={0.1}
      />
    </Container>
  );
};

export { SeriesPage };
