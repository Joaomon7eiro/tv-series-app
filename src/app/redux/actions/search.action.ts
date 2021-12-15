import { Person } from '../reducers/search.reducer';
import { Series } from '../reducers/series.reducer';

const search = '[search]';

export const searchActions = {
  SEARCH_BY_NAME: `${search} SEARCH BY NAME`,
  SEARCH_BY_NAME_SUCCESS: `${search} SEARCH BY NAME SUCCESS`,
  SEARCH_BY_NAME_ERROR: `${search} SEARCH BY NAME ERROR`,
  SEARCH_PEOPLE_BY_NAME_SUCCESS: `${search} SEARCH PEOPLE BY NAME SUCCESS`,
  SEARCH_PEOPLE_BY_NAME_ERROR: `${search} SEARCH PEOPLE BY NAME ERROR`,
  UPDATE_SEARCH: `${search} UPDATE SEARCH`,
  UPDATE_PEOPLE_SEARCH: `${search} UPDATE PEOPLE SEARCH`,
};

export const searchSeriesByName = (name: string) => ({
  type: searchActions.SEARCH_BY_NAME,
  payload: name,
});

export const updateSearchCollection = (series: Series[]) => ({
  type: searchActions.UPDATE_SEARCH,
  payload: series,
});

export const updatePeopleSearchCollection = (data: Person) => ({
  type: searchActions.UPDATE_PEOPLE_SEARCH,
  payload: data,
});
