import React from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { useTheme } from 'styled-components';
import { useEpisodes } from '../../../hooks/episode.hook';
import { EpisodeItem } from '../EpisodeItem/episode-item.component';

type EpisodesContainerProps = {
  seasonId: number;
}

export const EpisodesContainer: React.FC<EpisodesContainerProps> = ({ seasonId }) => {
  const { data: episodes, isFetching } = useEpisodes(seasonId);
  const theme = useTheme();

  if (isFetching) {
    return <ActivityIndicator color={theme.colors.primary} />;
  }
  return (
    <ScrollView>
      {episodes?.map((episode) => (
        <EpisodeItem key={episode.id} data={episode} />
      ))}
    </ScrollView>
  );
};
