import { uiActions } from "../actions/ui.actions";

const initialState = [] as [];

export function uiReducer(state = initialState, action: any) {

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