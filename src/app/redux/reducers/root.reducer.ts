import { combineReducers } from 'redux';

import { uiReducer, UiState } from './ui.reducer';

export type ApplicationState = {
  ui: UiState
}

export const rootReducer = combineReducers({
  ui: uiReducer,
});
