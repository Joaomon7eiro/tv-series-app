import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Series } from '../../../app/redux/reducers/series.reducer';

import {
  Container,
  SeriesImage,
  SeriesTitleText,
} from './series-item.styles';

type SeriesItemProps = {
  data: Series
}

export const SeriesItem: React.FC<SeriesItemProps> = ({ data }) => {
  const navigation = useNavigation();
  const { name, image } = data;

  const handleNavigate = () => {
    navigation.navigate('SeriesDetails', { series: data });
  }

  return (
    <Container onPress={handleNavigate}>
      <SeriesImage
        source={{ uri: image?.medium }}
        resizeMode='cover'
      />
      <SeriesTitleText>{name}</SeriesTitleText>
    </Container>
  );
}