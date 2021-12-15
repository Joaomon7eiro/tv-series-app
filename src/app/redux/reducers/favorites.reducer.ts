import { AnyAction } from 'redux';
import { favoriteActions } from '../actions/favorites.actions';
import { Series } from './series.reducer';

const initialState = [] as Series[];

export function favoritesReducer(state = initialState, action: AnyAction): Series[] {
  switch (action.type) {
    case favoriteActions.UPDATE_FAVORITES: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
