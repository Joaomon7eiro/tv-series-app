import { AnyAction } from "redux";
import { uiActions } from "../actions/ui.actions";

const initialState = {};

export function uiReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case uiActions.SHOW_SPINNER: {
      return { ...state, pending: true }
    }
    case uiActions.HIDE_SPINNER: {
      return { ...state, pending: false }
    }
    default:
      return state;
  }

}