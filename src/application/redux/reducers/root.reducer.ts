import { combineReducers } from "redux";
import { seriesReducer } from './series.reducer';
import { uiReducer } from './ui.reducer';


export const rootReducer = combineReducers({
  series: seriesReducer,
  ui: uiReducer
});
