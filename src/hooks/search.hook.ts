import { useQuery } from 'react-query';
import api from '../infra/services/api';
import { Person, Series } from '../types/series';
import removeHtmlFromString from '../utils/remove-html-from-string';

const fetchSearch = async (term: string) => {
  const [showsResponse, peopleResponse] = await Promise.all([
    api.get(`/search/shows?q=${term}`),
    api.get(`/search/people?q=${term}`),
  ]);

  const series = showsResponse.data.map(({ show }: { show: Series }) => ({
    ...show,
    summary: removeHtmlFromString(show.summary),
  }));

  const people = peopleResponse.data.map(({ person }: { person: Person }) => ({
    ...person,
  }));

  return {
    people,
    series,
  };
};

export const useSearch = (term: string) => useQuery(['search', term], () => fetchSearch(term));
