import { Reducer, AnyAction, combineReducers } from "redux";
import { Episode, episodesReducer } from "./episodes.reducer";
import { Season, seasonsReducer } from "./seasons.reducer";
import { Series, seriesReducer } from './series.reducer';
import { uiReducer, UiState } from './ui.reducer';

export type ApplicationState = {
  series: Series[]
  ui: UiState
  seasons: Season[]
  episodes: Episode[]
}

export const rootReducer: Reducer<ApplicationState, AnyAction> = combineReducers<ApplicationState>({
  series: seriesReducer,
  ui: uiReducer,
  seasons: seasonsReducer,
  episodes: episodesReducer
});
