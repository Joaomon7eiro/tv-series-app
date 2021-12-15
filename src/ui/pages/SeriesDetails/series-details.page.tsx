import React, { useEffect, useMemo } from 'react';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { createSelector } from 'reselect';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';
import { useTheme } from 'styled-components';
import { Series } from '../../../app/redux/reducers/series.reducer';

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
  Header,
} from './series-details.styles';
import { getSeasonsBySeriesId } from '../../../app/redux/actions/seasons.action';
import { useAppDispatch, useAppSelector } from '../../../hooks/custom-hooks';
import { Seasons } from '../../components/Seasons/seasons.component';
import { toggleFavorite } from '../../../app/redux/actions/favorites.actions';
import imagePlaceholder from '../../../utils/image-placeholder.util';

type RouteParams = {
  series: Series
}

export const SeriesDetails: React.FC = () => {
  const route = useRoute();
  const { series } = route.params as RouteParams;

  const theme = useTheme();

  const dispatch = useAppDispatch();

  const seasons = useAppSelector((state) => state.seasons);

  const getIsFavorite = createSelector(
    // First, pass one or more "input selector" functions:
    (state) => state.favorites,
    // Then, an "output selector" that receives all the input results as arguments
    // and returns a final result value
    (favorites) => favorites.some((f) => f.id === series.id),
  );

  const isFavorite = useAppSelector(getIsFavorite);

  useEffect(() => {
    dispatch(getSeasonsBySeriesId(series.id));
  }, [series]);

  const genres = useMemo(() => series.genres.join('/'), [series]);
  const days = useMemo(() => series.schedule.days.join(','), [series]);

  return (
    <Container
      nestedScrollEnabled
    >
      <SafeAreaView>
        <SeriesImage
          source={{ uri: series.image ? series.image.original : imagePlaceholder }}
          resizeMode="cover"
        >
          <LinearGradient
            colors={['transparent', 'rgba(100, 100, 100, 0.5)', theme.colors.background]}
            style={{ flex: 1, justifyContent: 'center' }}
          />
        </SeriesImage>

        <Content>
          <Header>
            <TitleWrapper>
              <TitleText>
                {series.name}
              </TitleText>
            </TitleWrapper>

            <FavoriteButton onPress={() => dispatch(toggleFavorite(series))}>
              <Ionicons name={isFavorite!! ? 'heart-dislike-circle' : 'heart-circle'} size={40} color="#fff" />
            </FavoriteButton>
          </Header>

          <SeriesSubtitle>
            <Schedule>
              {`${days} at ${series.schedule.time}`}
            </Schedule>
            <Genres>{genres}</Genres>
          </SeriesSubtitle>

          <SummaryText>
            {series.summary}
          </SummaryText>
        </Content>

        <Seasons data={seasons} />

      </SafeAreaView>
    </Container>
  );
};
