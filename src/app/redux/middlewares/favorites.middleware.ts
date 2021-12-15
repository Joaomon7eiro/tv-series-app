import { Middleware } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { favoriteActions, updateFavorites } from '../actions/favorites.actions';
import { hideSpinner, showSpinner } from '../actions/ui.actions';
import { RootState } from '../store';
import { Series } from '../reducers/series.reducer';

const favoritesKey = '@favorites:';

const getFavoritesCollection: Middleware<{}, RootState> = ({ dispatch }) => (next) => async (action) => {
  next(action);

  if (action.type === favoriteActions.GET_FAVORITES) {
    dispatch(showSpinner());
    const favoritesData = await AsyncStorage.getItem(favoritesKey);

    if (favoritesData) {
      const favorites = JSON.parse(favoritesData);
      const sortedFavorites = (favorites as Series[]).sort((showA, showB) => (showA.name < showB.name ? -1 : 1));
      dispatch(updateFavorites(sortedFavorites));
    }
    dispatch(hideSpinner());
  }
};

const toggleFavoriteData: Middleware<{}, RootState> = ({ dispatch }) => (next) => async (action) => {
  next(action);

  if (action.type === favoriteActions.TOGGLE_FAVORITE) {
    const favorite = action.payload;

    const favoritesData = await AsyncStorage.getItem(favoritesKey);

    let favoritesCollection: Series[] = [];
    if (favoritesData) {
      const favorites = JSON.parse(favoritesData);
      const isFavorite = favorites.some((f: Series) => f.id === favorite.id);
      if (isFavorite) {
        favoritesCollection = favorites.filter((f: Series) => f.id !== favorite.id);
      } else {
        favoritesCollection = [...favorites, favorite];
      }
    } else {
      favoritesCollection = [favorite];
    }

    await AsyncStorage.setItem(favoritesKey, JSON.stringify(favoritesCollection));
    dispatch(updateFavorites(favoritesCollection));
  }
};

export const favoritesMiddleware = [toggleFavoriteData, getFavoritesCollection];
