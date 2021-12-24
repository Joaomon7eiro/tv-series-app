import { useInfiniteQuery } from 'react-query';
import { Series } from '../app/redux/reducers/series.reducer';
import api from '../infra/services/api';

const fetchAllSeries = async ({ pageParam = 0 }) => api.get<Series[]>(`/shows?page=${pageParam}`);

export const useSeries = () => {
  const query = useInfiniteQuery('series', fetchAllSeries, {
    getNextPageParam: () => {},
  });
  return query;
};
