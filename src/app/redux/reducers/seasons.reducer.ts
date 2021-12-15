import { AnyAction } from 'redux';
import { seasonsActions } from '../actions/seasons.action';

export type Season = {
  id: number;
  number: number;
}

const initialState = [] as Season[];

export function seasonsReducer(state = initialState, action: AnyAction): Season[] {
  switch (action.type) {
    case seasonsActions.UPDATE_SEASONS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
