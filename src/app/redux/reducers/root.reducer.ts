import { combineReducers } from 'redux';
import { Series } from '../../../types/series';
import { favoritesReducer } from './favorites.reducer';

import { uiReducer, UiState } from './ui.reducer';

export type ApplicationState = {
  ui: UiState
  favorites: Series[]
}

export const rootReducer = combineReducers({
  ui: uiReducer,
  favorites: favoritesReducer,
});
