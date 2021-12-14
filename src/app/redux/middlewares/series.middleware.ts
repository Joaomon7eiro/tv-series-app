import { Middleware } from "redux";
import removeHtmlFromString from "../../../utils/remove-html-from-string";
import { apiRequest } from "../actions/api.action";
import { seriesActions, updateSeries, updateSeriesCollection } from "../actions/series.action";
import { hideSpinner, showSpinner } from "../actions/ui.actions";
import { Series } from "../reducers/series.reducer";
import { RootState } from "../store";

const getSeriesCollection: Middleware<{}, RootState> = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === seriesActions.GET_SERIES) {
    dispatch(apiRequest({
      url: '/shows?page=0',
      method: 'GET',
      onSuccess: seriesActions.GET_SERIES_SUCCESS,
      onError: seriesActions.GET_SERIES_ERROR,
    }));
    dispatch(showSpinner());
  }
};

const getSeriesByIdData: Middleware<{}, RootState> = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === seriesActions.GET_SERIES_BY_ID) {
    dispatch(apiRequest({
      url: `/shows/${action.payload}`,
      method: 'GET',
      onSuccess: seriesActions.GET_SERIES_BY_ID_SUCCESS,
      onError: seriesActions.GET_SERIES_BY_ID_ERROR,
    }));
    dispatch(showSpinner());
  }
};

const processSeriesColletion: Middleware<{}, RootState> = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === seriesActions.GET_SERIES_SUCCESS) {
    const seriesCollection = (action.payload as Series[]).map((series) => ({
      ...series,
      summary: removeHtmlFromString(series.summary)
    }));
    dispatch(updateSeriesCollection(seriesCollection));
    dispatch(hideSpinner());
  }
};

const processSeriesData: Middleware<{}, RootState> = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === seriesActions.GET_SERIES_BY_ID_SUCCESS) {
    dispatch(updateSeries(action.payload));
    dispatch(hideSpinner());
  }
};

export const seriesMiddleware = [getSeriesCollection, getSeriesByIdData, processSeriesColletion, processSeriesData];