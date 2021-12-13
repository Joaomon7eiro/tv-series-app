import { Reducer } from "redux";
import { AnyAction, combineReducers } from "redux";
import { seriesReducer } from './series.reducer';
import { uiReducer } from './ui.reducer';

export type ApplicationState = {
  series: any
  ui: object
}

export const rootReducer: Reducer<ApplicationState, AnyAction> = combineReducers<ApplicationState>({
  series: seriesReducer,
  ui: uiReducer
});
