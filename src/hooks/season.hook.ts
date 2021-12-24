import { useQuery } from 'react-query';
import { Season } from '../app/redux/reducers/seasons.reducer';
import api from '../infra/services/api';

const fetchSeries = async (id: number) => {
  const response = await api.get<Season[]>(`/shows/${id}/seasons`);
  return response.data;
};

export const useSeason = (id: number) => useQuery(['seasons', id], () => fetchSeries(id));
