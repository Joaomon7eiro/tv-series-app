import React, { useMemo } from 'react';
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

type RouteParams = {
  series: Series
}
type SeriesDetails = {
  children: React.ReactNode
  route: RouteParams
}


const SeriesDetails: React.FC = () => {
  const route = useRoute();
  const { series } = route.params as RouteParams;
  console.log(series);

  const genres = useMemo(() => {
    return series.genres.join('/');
  }, []);

  return (
    <Container>
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
            <Schedule>{series.schedule.days} at {series.schedule.time}</Schedule>
            <Genres>{genres}</Genres>
          </SeriesSubtitle>

          <SummaryText>
            {series.summary}
          </SummaryText>
        </Content>
      </SafeAreaView>
    </Container>
  );
}
export { SeriesDetails };