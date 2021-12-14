import { AnyAction } from "redux";
import { searchActions } from "../actions/search.action";
import { Series } from "./series.reducer";


export type Search = {
  series: Series[]
  people: any
}

const initialState = {} as Search;

export function searchReducer(state = initialState, action: AnyAction): Search {
  switch (action.type) {
    case searchActions.UPDATE_SEARCH: {
      return {
        ...state,
        series: action.payload
      };
    }
    default: {
      return state;
    }
  }
}