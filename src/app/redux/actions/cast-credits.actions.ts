import { Series } from '../reducers/series.reducer';

const castCredits = '[cast-credits]';

export const castCreditsActions = {
  GET_CAST_CREDITS: `${castCredits} GET CAST CREDITS`,
  GET_CAST_CREDITS_SUCCESS: `${castCredits} GET CAST CREDITS SUCCESS`,
  GET_CAST_CREDITS_ERROR: `${castCredits} GET CAST CREDITS ERROR`,
  UPDATE_CAST_CREDITS: `${castCredits} UPDATE CAST CREDITS`,
};

export const getCastCreditsByPersonId = (personId: number) => ({
  type: castCreditsActions.GET_CAST_CREDITS,
  payload: personId,
});

export const updateCastCreditCollection = (series: Series[]) => ({
  type: castCreditsActions.UPDATE_CAST_CREDITS,
  payload: series,
});
