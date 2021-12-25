import { useQuery } from 'react-query';
import { Episode } from '../app/redux/reducers/episodes.reducer';
import api from '../infra/services/api';
import removeHtmlFromString from '../utils/remove-html-from-string';

const fetchEpisodes = async (id: number) => {
  if (id) {
    const response = await api.get<Episode[]>(`/seasons/${id}/episodes`);

    const episodes = response.data.map((episode) => ({
      ...episode,
      summary: removeHtmlFromString(episode.summary),
    }));

    return episodes;
  }

  return Promise.resolve([]);
};

export const useEpisodes = (id: number) => useQuery(['episodes', id], () => fetchEpisodes(id));
