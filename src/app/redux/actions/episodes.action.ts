import { Episode } from "../reducers/episodes.reducer";

const episodes = '[episodes]';

export const episodesActions = {
  GET_EPISODES_BY_SEASON: `${episodes} GET EPISODES BY SEASON`,
  GET_EPISODES_BY_SEASON_SUCCESS: `${episodes} GET EPISODES BY SEASON SUCCESS`,
  GET_EPISODES_BY_SEASON_ERROR: `${episodes} GET EPISODES BY SEASON ERROR`,
  UPDATE_EPISODES: `${episodes} UPDATE EPISODES`,
};

export const getEpisodesBySeasonId = (seasonId: number) => ({
  type: episodesActions.GET_EPISODES_BY_SEASON,
  payload: seasonId
});


export const updateEpisodesCollection = (episodes: Episode[]) => ({
  type: episodesActions.UPDATE_EPISODES,
  payload: episodes
});

