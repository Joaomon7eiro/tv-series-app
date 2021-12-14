import { Middleware } from "redux";
import removeHtmlFromString from "../../../utils/remove-html-from-string";
import { apiRequest } from "../actions/api.action";
import { episodesActions, updateEpisodesCollection } from "../actions/episodes.action";
import { searchActions, updateSearchCollection } from "../actions/search.action";
import { updateSeasonsCollection } from "../actions/seasons.action";
import { hideSpinner, showSpinner } from "../actions/ui.actions";
import { Episode } from "../reducers/episodes.reducer";
import { Series } from "../reducers/series.reducer";
import { RootState } from "../store";

const searchSeriesCollection: Middleware<{}, RootState> = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === searchActions.SEARCH_BY_NAME) {
    dispatch(apiRequest({
      url: `/search/shows?q=${action.payload}`,
      method: 'GET',
      onSuccess: searchActions.SEARCH_BY_NAME_SUCCESS,
      onError: searchActions.SEARCH_BY_NAME_ERROR,
    }));
    dispatch(showSpinner());
  }
};

const processSearchSeriesColletion: Middleware<{}, RootState> = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === searchActions.SEARCH_BY_NAME_SUCCESS) {
    const seriesCollection = action.payload.map(({ show }: any) => ({
      ...show,
      summary: removeHtmlFromString(show.summary)
    }));
    dispatch(updateSearchCollection(seriesCollection));
    dispatch(hideSpinner());
  }

  if (action.type === searchActions.SEARCH_BY_NAME_ERROR) {
    console.log(action.payload);
    dispatch(hideSpinner());
  }
};

export const searchMiddleware = [searchSeriesCollection, processSearchSeriesColletion];