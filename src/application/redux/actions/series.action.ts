const series = '[series]';

export const seriesActions = {
  GET_SERIES: `${series} GET SERIES`,
  GET_SERIES_SUCCESS: `${series} GET SERIES REQUEST SUCCESS`,
  GET_SERIES_ERROR: `${series} GET SERIES REQUEST ERROR`,
  UPDATE_SERIES: `${series} UPDATE SERIES`,
};

export const getAllSeries = () => ({
  type: seriesActions.GET_SERIES
});

export const updateSeries = (series: any) => ({
  type: seriesActions.UPDATE_SERIES,
  payload: series
});