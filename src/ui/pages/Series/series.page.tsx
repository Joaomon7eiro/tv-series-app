import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { useTheme } from 'styled-components';
import { Series } from '../../../app/redux/reducers/series.reducer';
import { useSeries } from '../../../hooks/all-series.hook';
import { SeriesItem } from '../../components/SeriesItem/series-item.component';

import {
  Container,
  Title,
} from './series.styles';

const SeriesPage: React.FC = () => {
  const [page, setPage] = useState(0);

  const theme = useTheme();
  const { colors } = useTheme();

  const query = useSeries();
  const series = query?.data?.pages.map((p: {data: Series[]}) => p.data).flat();

  useEffect(() => {
    query.fetchNextPage({ pageParam: page });
  }, [page]);

  const handleOnEndReached = () => {
    if (!query.isFetching) {
      setPage((previousPage) => previousPage + 1);
    }
  };

  const listHeaderComponent = () => (<Title>TV SERIES</Title>);
  const listFooterComponent = () => (query.isFetching ? <ActivityIndicator color={theme.colors.primary} /> : null);

  return (
    <Container
      colors={[colors.primaryDark, 'rgb(75, 86, 96)', colors.primaryDark, 'rgb(26, 32, 38)']}
      start={{ x: 0.1, y: 0.2 }}
    >
      <FlatList
        data={series}
        keyExtractor={(item, index) => String(item.id) + String(index)}
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
        onEndReachedThreshold={0}
        scrollEventThrottle={16}
      />
    </Container>
  );
};

export { SeriesPage };
