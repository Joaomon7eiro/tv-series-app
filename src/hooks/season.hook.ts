import { useQuery } from 'react-query';
import api from '../infra/services/api';
import { Season } from '../types/series';

const fetchSeries = async (id: number) => {
  const response = await api.get<Season[]>(`/shows/${id}/seasons`);
  return response.data;
};

export const useSeason = (id: number) => useQuery(['seasons', id], () => fetchSeries(id));
