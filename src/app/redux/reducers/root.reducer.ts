import { combineReducers } from 'redux';
import { castCreditsReducer } from './cast-credits.reducer';
import { Episode, episodesReducer } from './episodes.reducer';
import { Search, searchReducer } from './search.reducer';
import { Season, seasonsReducer } from './seasons.reducer';
import { Series, seriesReducer } from './series.reducer';
import { uiReducer, UiState } from './ui.reducer';

export type ApplicationState = {
  series: Series[]
  ui: UiState
  seasons: Season[]
  episodes: Episode[]
  search: Search
  castCredits: Series[]
}

export const rootReducer = combineReducers({
  series: seriesReducer,
  ui: uiReducer,
  seasons: seasonsReducer,
  episodes: episodesReducer,
  search: searchReducer,
  castCredits: castCreditsReducer,
});
