import { useQuery } from 'react-query';
import api from '../infra/services/api';
import removeHtmlFromString from '../utils/remove-html-from-string';

const fetchCastCreditSeries = async (id: number) => {
  const response = await api.get(`/people/${id}/castcredits?embed=show`);

  const series = response.data.map((data: any) => {
    const seriesData = data._embedded.show;
    return {
      ...seriesData,
      summary: removeHtmlFromString(seriesData.summary),
    };
  });

  return series;
};

export const useCastCredit = (id: number) => useQuery(['cast-credits', id], () => fetchCastCreditSeries(id));
