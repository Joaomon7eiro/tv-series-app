import { Season } from "../reducers/seasons.reducer";

const seasons = '[seasons]';

export const seasonsActions = {
  GET_SEASONS: `${seasons} GET SEASONS`,
  GET_SEASONS_SUCCESS: `${seasons} GET SEASONS SUCCESS`,
  GET_SEASONS_ERROR: `${seasons} GET SEASONS ERROR`,
  UPDATE_SEASONS: `${seasons} UPDATE SEASONS`,
};

export const getSeasonsBySeriesId = (id: number) => ({
  type: seasonsActions.GET_SEASONS,
  payload: id
});

export const updateSeasonsCollection = (seasons: Season[]) => ({
  type: seasonsActions.UPDATE_SEASONS,
  payload: seasons
});

