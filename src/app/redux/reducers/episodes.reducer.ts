import { AnyAction } from 'redux';
import { episodesActions } from '../actions/episodes.action';

export type Episode = {
  id: number
  name: string
  number: number
  summary: string
  season: number
  image?: {
    medium: string
    original: string;
  }
}

const initialState = [] as Episode[];

export function episodesReducer(state = initialState, action: AnyAction): Episode[] {
  switch (action.type) {
    case episodesActions.UPDATE_EPISODES: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
