import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { useTheme } from 'styled-components';
import { useAppSelector } from '../../../hooks/custom-hooks';
import { useFavorites } from '../../../hooks/favorites.context';
import { FavoriteItem } from '../../components/FavoriteItem/favorite-item.component';

import {
  Container,
  Title,
} from './favorites.styles';

export const Favorites: React.FC = () => {
  const { favorites } = useFavorites();
  const ui = useAppSelector((state) => state.ui);
  const { colors } = useTheme();

  const listHeaderComponent = () => (<Title>FAVORITE SERIES</Title>);
  const listFooterComponent = () => (ui.pending ? <ActivityIndicator color={colors.primary} /> : null);

  return (
    <Container
      colors={[colors.primaryDark, 'rgb(75, 86, 96)', colors.primaryDark, 'rgb(26, 32, 38)']}
      start={{ x: 0.1, y: 0.2 }}
    >
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
