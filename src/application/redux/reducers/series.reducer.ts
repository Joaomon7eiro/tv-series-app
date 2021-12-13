import { seriesActions } from "../actions/series.action";

const initialState = [] as [];

export function seriesReducer(state = initialState, action: any) {
  switch (action.type) {
    case seriesActions.UPDATE_SERIES: {
      return [...action.payload];
    }
    default: {
      return state;
    }
  }
}