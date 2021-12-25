import { Series } from '../../../types/series';

const favorites = '[favorites]';

export const favoriteActions = {
  GET_FAVORITES: `${favorites} GET EPISODES BY SEASON`,
  TOGGLE_FAVORITE: `${favorites} TOGGLE FAVORITE`,
  UPDATE_FAVORITES: `${favorites} UPDATE FAVORITES`,
};

export const getFavorites = () => ({
  type: favoriteActions.GET_FAVORITES,
});

export const toggleFavorite = (series: Series) => ({
  type: favoriteActions.TOGGLE_FAVORITE,
  payload: series,
});

export const updateFavorites = (series: Series[]) => ({
  type: favoriteActions.UPDATE_FAVORITES,
  payload: series,
});
