import { useRoute } from '@react-navigation/native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  Container,
  EpisodeImage,
  Title,
  Summary,
  Header,
} from './episode-details.styles';
import imagePlaceholder from '../../../utils/image-placeholder.util';
import { BackButton } from '../../components/BackButton/back-button.component';
import { Episode } from '../../../types/series';

type RouteParams = {
  episode: Episode
}

export const EpisodeDetails: React.FC = () => {
  const route = useRoute();
  const { episode } = route.params as RouteParams;
  const theme = useTheme();

  return (
    <Container>
      <SafeAreaView>
        <Header>
          <EpisodeImage source={{ uri: episode.image ? episode.image.original : imagePlaceholder }}>
            <LinearGradient
              colors={['transparent', 'rgba(100, 100, 100, 0.5)', theme.colors.background]}
              style={{ flex: 1, justifyContent: 'center' }}
            />
          </EpisodeImage>
          <BackButton />
        </Header>

        <Title>{`S${episode.season}:E${episode.number}  ${episode.name}`}</Title>

        <Summary>
          {episode.summary}
        </Summary>
      </SafeAreaView>
    </Container>
  );
};
