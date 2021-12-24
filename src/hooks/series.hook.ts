import { useInfiniteQuery } from 'react-query';
import { Series } from '../app/redux/reducers/series.reducer';
import api from '../infra/services/api';

const fetchAllSeries = async ({ pageParam = 0 }) => {
  const response = await api.get<Series[]>(`/shows?page=${pageParam}`);

  return response.data;
};

export const useAllSeries = () => useInfiniteQuery('series', fetchAllSeries, {
  getNextPageParam: () => {},
});
