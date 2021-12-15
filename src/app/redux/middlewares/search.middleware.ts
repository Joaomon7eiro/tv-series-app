import { Middleware } from 'redux';
import removeHtmlFromString from '../../../utils/remove-html-from-string';
import { apiRequest } from '../actions/api.actions';
import { searchActions, updatePeopleSearchCollection, updateSearchCollection } from '../actions/search.action';
import { hideSpinner, showSpinner } from '../actions/ui.actions';
import { Person } from '../reducers/search.reducer';
import { Series } from '../reducers/series.reducer';
import { RootState } from '../store';

const searchSeriesCollection: Middleware<{}, RootState> = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === searchActions.SEARCH_BY_NAME) {
    dispatch(apiRequest({
      url: `/search/shows?q=${action.payload}`,
      method: 'GET',
      onSuccess: searchActions.SEARCH_BY_NAME_SUCCESS,
      onError: searchActions.SEARCH_BY_NAME_ERROR,
    }));
    dispatch(apiRequest({
      url: `/search/people?q=${action.payload}`,
      method: 'GET',
      onSuccess: searchActions.SEARCH_PEOPLE_BY_NAME_SUCCESS,
      onError: searchActions.SEARCH_BY_NAME_ERROR,
    }));
    dispatch(showSpinner());
  }
};

const processSearchSeriesColletion: Middleware<{}, RootState> = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === searchActions.SEARCH_BY_NAME_SUCCESS) {
    const seriesCollection = action.payload.map(({ show }: { show: Series }) => ({
      ...show,
      summary: removeHtmlFromString(show.summary),
    }));
    dispatch(updateSearchCollection(seriesCollection));
    dispatch(hideSpinner());
  }

  if (action.type === searchActions.SEARCH_PEOPLE_BY_NAME_SUCCESS) {
    const peopleCollection = (action.payload).map(({ person }: { person: Person }) => ({
      ...person,
    }));
    dispatch(updatePeopleSearchCollection(peopleCollection));
    dispatch(hideSpinner());
  }

  if (action.type === searchActions.SEARCH_BY_NAME_ERROR || action.type === searchActions.SEARCH_PEOPLE_BY_NAME_ERROR) {
    dispatch(hideSpinner());
  }
};

export const searchMiddleware = [searchSeriesCollection, processSearchSeriesColletion];
