import { AnyAction } from 'redux';
import { castCreditsActions } from '../actions/cast-credits.actions';
import { Series } from './series.reducer';

const initialState = [] as Series[];

export function castCreditsReducer(state = initialState, action: AnyAction): Series[] {
  switch (action.type) {
    case castCreditsActions.UPDATE_CAST_CREDITS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
