import React, { useMemo } from 'react';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from 'styled-components';

import {
  Container,
  SeriesImage,
  TitleText,
  SummaryText,
  SeriesSubtitle,
  Schedule,
  Genres,
  Content,
  FavoriteButton,
  TitleWrapper,
  ContentHeader,
  Header,
} from './series-details.styles';
import { Seasons } from '../../components/Seasons/seasons.component';
import imagePlaceholder from '../../../utils/image-placeholder.util';
import { BackButton } from '../../components/BackButton/back-button.component';
import { Series } from '../../../types/series';
import { useFavorites } from '../../../hooks/favorites.context';

type RouteParams = {
  series: Series
}

export const SeriesDetails: React.FC = () => {
  const route = useRoute();
  const { series } = route.params as RouteParams;

  const {
    removeFavorite, addFavorite, isFavorite,
  } = useFavorites();

  const theme = useTheme();

  const toggleFavorite = () => {
    if (isFavorite(series.id)) {
      return removeFavorite(series.id);
    }
    return addFavorite(series);
  };

  const genres = useMemo(() => series.genres.join('/'), [series]);
  const days = useMemo(() => series.schedule.days.join(', '), [series]);

  const formatScheduleValue = () => {
    let value = '';
    if (days && days.length) {
      value += `${days}`;
      if (series.schedule.time) {
        value += ` at ${series.schedule.time}`;
      }
    } else {
      value += `${series.schedule.time}`;
    }
    return value;
  };

  return (
    <Container>
      <SafeAreaView>
        <Header>
          <SeriesImage
            source={{ uri: series.image ? series.image.original : imagePlaceholder }}
            resizeMode="cover"
          >
            <LinearGradient
              colors={['transparent', 'rgba(100, 100, 100, 0.5)', theme.colors.background]}
              style={{ flex: 1, justifyContent: 'center' }}
            />
          </SeriesImage>
          <BackButton />
        </Header>

        <Content>
          <ContentHeader>
            <TitleWrapper>
              <TitleText>
                {series.name}
              </TitleText>
            </TitleWrapper>

            <FavoriteButton onPress={toggleFavorite}>
              <Ionicons name={isFavorite(series.id)!! ? 'heart-dislike-circle' : 'heart-circle'} size={40} color="#fff" />
            </FavoriteButton>
          </ContentHeader>

          <SeriesSubtitle>
            <Schedule>
              {formatScheduleValue()}
            </Schedule>
            <Genres>{genres}</Genres>
          </SeriesSubtitle>

          <SummaryText>
            {series.summary}
          </SummaryText>
        </Content>

        <Seasons serieId={series.id} />

      </SafeAreaView>
    </Container>
  );
};
