import { Series } from "../reducers/series.reducer";

const series = '[series]';

export const seriesActions = {
  GET_SERIES: `${series} GET SERIES`,
  GET_SERIES_SUCCESS: `${series} GET SERIES REQUEST SUCCESS`,
  GET_SERIES_ERROR: `${series} GET SERIES REQUEST ERROR`,
  UPDATE_SERIES_COLLECTION: `${series} UPDATE SERIES COLLECTION`,
};

export const getAllSeries = (page: number) => ({
  type: seriesActions.GET_SERIES,
  payload: page
});

export const updateSeriesCollection = (series: Series[]) => ({
  type: seriesActions.UPDATE_SERIES_COLLECTION,
  payload: series
});
