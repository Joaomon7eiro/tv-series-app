import React, { useEffect, useMemo } from 'react';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Series } from '../../../app/redux/reducers/series.reducer';

import {
  Container,
  SeriesImage,
  TitleText,
  SummaryText,
  SeriesSubtitle,
  Schedule,
  Genres,
  Content
} from './series-details.styles';
import { getSeasonsBySeriesId } from '../../../app/redux/actions/seasons.action';
import { useAppDispatch } from '../../../hooks/custom-hooks';
import { Seasons } from '../../components/Seasons/seasons.component';

type RouteParams = {
  series: Series
}

const SeriesDetails: React.FC = () => {
  const route = useRoute();
  const { series } = route.params as RouteParams;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSeasonsBySeriesId(series.id));
  }, []);

  const genres = useMemo(() => {
    return series.genres.join('/');
  }, []);

  const days = useMemo(() => {
    return series.schedule.days.join(',');
  }, []);

  return (
    <Container
      nestedScrollEnabled={true}
    >
      <SafeAreaView>

        <SeriesImage
          source={{ uri: series.image?.original }}
          resizeMode='cover'
        />

        <Content>
          <TitleText>
            {series.name}
          </TitleText>

          <SeriesSubtitle>
            <Schedule>{days} at {series.schedule.time}</Schedule>
            <Genres>{genres}</Genres>
          </SeriesSubtitle>

          <SummaryText>
            {series.summary}
          </SummaryText>
        </Content>

        <Seasons />

      </SafeAreaView>
    </Container>
  );
}
export { SeriesDetails };