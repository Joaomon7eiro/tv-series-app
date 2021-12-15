import { Middleware } from 'redux';
import api from '../../../infra/services/api';
import { apiActions } from '../actions/api.action';
import { RootState } from '../store';

export const apiMiddleware: Middleware<{}, RootState> = ({ dispatch }) => (next) => (action) => {
  if (action.type === apiActions.API_REQUEST) {
    const {
      method, url, onSuccess, onError,
    } = action.meta;

    const apiConfig = {
      method,
      url,
    };
    if (action.payload) {
      Object.assign(apiConfig, { data: action.payload });
    }
    api({
      method,
      url,
    })
      .then((response) => dispatch({ type: onSuccess, payload: response.data }))
      .catch((error) => dispatch({ type: onError, payload: error }));
  }
  return next(action);
};
