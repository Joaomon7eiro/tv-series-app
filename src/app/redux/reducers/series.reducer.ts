import { AnyAction } from "redux";
import { seriesActions } from "../actions/series.action";

export type Series = {
  id: number
  name: string
  schedule: {
    time: string
    days: string[]
  }
  genres: string[]
  summary: string
  image?: {
    medium: string
    original: string;
  }
}

const initialState = [] as Series[];

export function seriesReducer(state = initialState, action: AnyAction): Series[] {
  switch (action.type) {
    case seriesActions.UPDATE_SERIES_COLLECTION: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}