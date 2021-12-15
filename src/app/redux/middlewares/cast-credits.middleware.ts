import { Middleware } from 'redux';
import removeHtmlFromString from '../../../utils/remove-html-from-string';
import { apiRequest } from '../actions/api.action';
import { castCreditsActions, updateCastCreditCollection } from '../actions/cast-credits.actions';
import { hideSpinner, showSpinner } from '../actions/ui.actions';
import { Series } from '../reducers/series.reducer';
import { RootState } from '../store';

const getCastCreditsCollection: Middleware<{}, RootState> = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === castCreditsActions.GET_CAST_CREDITS) {
    dispatch(apiRequest({
      url: `/people/${action.payload}/castcredits?embed=show`,
      method: 'GET',
      onSuccess: castCreditsActions.GET_CAST_CREDITS_SUCCESS,
      onError: castCreditsActions.GET_CAST_CREDITS_ERROR,
    }));
    dispatch(showSpinner());
  }
};

const processCastCreditsColletion: Middleware<{}, RootState> = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === castCreditsActions.GET_CAST_CREDITS_SUCCESS) {
    const series: Series[] = action.payload.map((data: any) => {
      const seriesData = data._embedded.show;
      return {
        ...seriesData,
        summary: removeHtmlFromString(seriesData.summary),
      };
    });
    dispatch(updateCastCreditCollection(series));
    dispatch(hideSpinner());
  }

  if (action.type === castCreditsActions.GET_CAST_CREDITS_ERROR) {
    dispatch(hideSpinner());
  }
};

export const castCreditsMiddleware = [getCastCreditsCollection, processCastCreditsColletion];
