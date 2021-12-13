import { Middleware } from "redux";
import { apiRequest } from "../actions/api.action";
import { seriesActions, updateSeries } from "../actions/series.action";
import { hideSpinner, showSpinner } from "../actions/ui.actions";
import { RootState } from "../store";

const getSeriesCollection: Middleware<{}, RootState> = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === seriesActions.GET_SERIES) {
    dispatch(apiRequest({
      url: '/shows',
      method: 'GET',
      onSuccess: seriesActions.GET_SERIES_SUCCESS,
      onError: seriesActions.GET_SERIES_ERROR,
    }));
    dispatch(showSpinner());
  }
};

const processSeriesColletion: Middleware<{}, RootState> = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === seriesActions.GET_SERIES_SUCCESS) {
    dispatch(updateSeries(action.payload));
    dispatch(hideSpinner());
  }
};

export const seriesMiddleware = [getSeriesCollection, processSeriesColletion];