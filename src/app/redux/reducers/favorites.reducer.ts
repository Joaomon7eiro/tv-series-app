import { AnyAction } from 'redux';
import { Series } from '../../../types/series';
import { favoriteActions } from '../actions/favorites.actions';

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
