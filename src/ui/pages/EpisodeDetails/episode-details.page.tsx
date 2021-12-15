import { useRoute } from '@react-navigation/native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from 'styled-components';
import { Episode } from '../../../app/redux/reducers/episodes.reducer';

import {
  Container,
  EpisodeImage,
  Title,
  Summary,
} from './episode-details.styles';
import imagePlaceholder from '../../../utils/image-placeholder.util';

type RouteParams = {
  episode: Episode
}

export const EpisodeDetails: React.FC = () => {
  const route = useRoute();
  const { episode } = route.params as RouteParams;
  const theme = useTheme();

  return (
    <Container>
      <EpisodeImage source={{ uri: episode.image ? episode.image.original : imagePlaceholder }}>
        <LinearGradient
          colors={['transparent', 'rgba(100, 100, 100, 0.5)', theme.colors.background]}
          style={{ flex: 1, justifyContent: 'center' }}
        />
      </EpisodeImage>

      <Title>{`S${episode.season}:E${episode.number}  ${episode.name}`}</Title>

      <Summary>
        {episode.summary}
      </Summary>
    </Container>
  );
};
