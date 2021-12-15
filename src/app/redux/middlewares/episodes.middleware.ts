import { Middleware } from 'redux';
import removeHtmlFromString from '../../../utils/remove-html-from-string';
import { apiRequest } from '../actions/api.actions';
import { episodesActions, updateEpisodesCollection } from '../actions/episodes.action';
import { hideSpinner, showSpinner } from '../actions/ui.actions';
import { Episode } from '../reducers/episodes.reducer';
import { RootState } from '../store';

const getEpisodesCollection: Middleware<{}, RootState> = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === episodesActions.GET_EPISODES_BY_SEASON) {
    dispatch(apiRequest({
      url: `/seasons/${action.payload}/episodes`,
      method: 'GET',
      onSuccess: episodesActions.GET_EPISODES_BY_SEASON_SUCCESS,
      onError: episodesActions.GET_EPISODES_BY_SEASON_ERROR,
    }));
    dispatch(showSpinner());
  }
};

const processEpisodesColletion: Middleware<{}, RootState> = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === episodesActions.GET_EPISODES_BY_SEASON_SUCCESS) {
    const episodesCollection = (action.payload as Episode[]).map((episode) => ({
      ...episode,
      summary: removeHtmlFromString(episode.summary),
    }));
    dispatch(updateEpisodesCollection(episodesCollection));
    dispatch(hideSpinner());
  }

  if (action.type === episodesActions.GET_EPISODES_BY_SEASON_ERROR) {
    dispatch(hideSpinner());
  }
};

export const episodesMiddleware = [getEpisodesCollection, processEpisodesColletion];
