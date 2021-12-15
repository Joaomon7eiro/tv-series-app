import { Middleware } from 'redux';
import { apiRequest } from '../actions/api.action';
import { updateEpisodesCollection } from '../actions/episodes.action';
import { seasonsActions, updateSeasonsCollection } from '../actions/seasons.action';
import { hideSpinner, showSpinner } from '../actions/ui.actions';
import { RootState } from '../store';

const getSeasonsCollection: Middleware<{}, RootState> = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === seasonsActions.GET_SEASONS) {
    dispatch(apiRequest({
      url: `/shows/${action.payload}/seasons`,
      method: 'GET',
      onSuccess: seasonsActions.GET_SEASONS_SUCCESS,
      onError: seasonsActions.GET_SEASONS_ERROR,
    }));
    dispatch(showSpinner());
  }
};

const processSeasonsColletion: Middleware<{}, RootState> = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === seasonsActions.GET_SEASONS_SUCCESS) {
    dispatch(updateEpisodesCollection([]));
    dispatch(updateSeasonsCollection(action.payload));
    dispatch(hideSpinner());
  }

  if (action.type === seasonsActions.GET_SEASONS_ERROR) {
    dispatch(hideSpinner());
  }
};

export const seasonsMiddleware = [processSeasonsColletion, getSeasonsCollection];
