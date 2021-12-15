import { AnyAction } from 'redux';
import { searchActions } from '../actions/search.action';
import { Series } from './series.reducer';

export type Search = {
  series?: Series[]
  people?: Person[]
}

export type Person = {
  id: number;
  name: string
  image?: {
    medium: string
    original: string;
  }
}

const initialState = {} as Search;

export function searchReducer(state = initialState, action: AnyAction): Search {
  switch (action.type) {
    case searchActions.UPDATE_SEARCH: {
      return {
        ...state,
        series: action.payload,
      };
    }
    case searchActions.UPDATE_PEOPLE_SEARCH: {
      return {
        ...state,
        people: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
