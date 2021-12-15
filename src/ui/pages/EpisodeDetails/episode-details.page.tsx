import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Episode } from '../../../app/redux/reducers/episodes.reducer';

import {
  Container,
  EpisodeImage,
  Title,
  Summary,
} from './episode-details.styles';

type RouteParams = {
  episode: Episode
}

export const EpisodeDetails: React.FC = () => {
  const route = useRoute();
  const { episode } = route.params as RouteParams;

  return (
    <Container>
      <EpisodeImage source={{ uri: episode.image?.original }} />

      <Title>{`S${episode.season}:E${episode.number} ${episode.name}`}</Title>

      <Summary>
        {episode.summary}
      </Summary>
    </Container>
  );
};
