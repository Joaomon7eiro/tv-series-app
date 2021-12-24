import { useQuery } from 'react-query';
import { Episode } from '../app/redux/reducers/episodes.reducer';
import api from '../infra/services/api';

const fetchEpisodes = async (id: number) => {
  if (id) {
    const response = await api.get<Episode[]>(`/seasons/${id}/episodes`);
    return response.data;
  }

  return Promise.resolve([]);
};

export const useEpisodes = (id: number) => useQuery(['episodes', id], () => fetchEpisodes(id));
