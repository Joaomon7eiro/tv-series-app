import { AnyAction } from 'redux';
import { uiActions } from '../actions/ui.actions';

export type UiState = {
  pending: boolean
}

const initialState = {} as UiState;

export function uiReducer(state = initialState, action: AnyAction): UiState {
  switch (action.type) {
    case uiActions.SHOW_SPINNER: {
      return { ...state, pending: true };
    }
    case uiActions.HIDE_SPINNER: {
      return { ...state, pending: false };
    }
    default:
      return state;
  }
}
