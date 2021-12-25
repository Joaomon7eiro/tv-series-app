import { useInfiniteQuery } from 'react-query';
import api from '../infra/services/api';
import { Series } from '../types/series';
import removeHtmlFromString from '../utils/remove-html-from-string';

const fetchAllSeries = async ({ pageParam = 0 }) => {
  const response = await api.get<Series[]>(`/shows?page=${pageParam}`);

  const series = response.data.map((s) => ({
    ...s,
    summary: removeHtmlFromString(s.summary),
  }));
  return series;
};

export const useAllSeries = () => useInfiniteQuery('series', fetchAllSeries, {
  getNextPageParam: () => {},
});
