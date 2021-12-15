import React, { useEffect, useMemo } from 'react';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
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

  const dispatch = useAppDispatch();

  const seasons = useAppSelector((state) => state.seasons);
  const isFavorite = useAppSelector((state) => state.favorites.some((f) => f.id === series.id));

  useEffect(() => {
    dispatch(getSeasonsBySeriesId(series.id));
  }, []);

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
        />

        <Content>
          <Header>
            <TitleWrapper>
              <TitleText>
                {series.name ? series.name : 'AAAAAAAA'}
              </TitleText>
            </TitleWrapper>

            <FavoriteButton onPress={() => dispatch(toggleFavorite(series))}>
              <Ionicons name={isFavorite!! ? 'heart-dislike-circle' : 'heart-circle'} size={40} />
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
