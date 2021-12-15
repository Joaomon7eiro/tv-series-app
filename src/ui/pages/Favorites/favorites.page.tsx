import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { getFavorites } from '../../../app/redux/actions/favorites.actions';
import { useAppDispatch, useAppSelector } from '../../../hooks/custom-hooks';
import { FavoriteItem } from '../../components/FavoriteItem/favorite-item.component';

import {
  Container,
  Title,
} from './favorites.styles';

export const Favorites: React.FC = () => {
  const favorites = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();
  const ui = useAppSelector((state) => state.ui);

  const listHeaderComponent = () => (<Title>FAVORITE SERIES</Title>);
  const listFooterComponent = () => (ui.pending ? <ActivityIndicator /> : null);

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  return (
    <Container>
      <FlatList
        data={favorites}
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
        numColumns={2}
        renderItem={({ item }) => <FavoriteItem data={item} />}
      />

    </Container>
  );
};
