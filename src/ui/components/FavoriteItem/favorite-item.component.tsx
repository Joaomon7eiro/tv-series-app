import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Series } from '../../../types/series';
import imagePlaceholder from '../../../utils/image-placeholder.util';

import {
  Container,
  SeriesImage,
  SeriesTitleText,
} from './favorite-item.styles';

type SeriesItemProps = {
  data: Series,
  hasFixedSize?: boolean
}

export const FavoriteItem: React.FC<SeriesItemProps> = ({ data, hasFixedSize = false }) => {
  const navigation = useNavigation();
  const { name, image } = data;

  const handleNavigate = () => {
    navigation.navigate('SeriesDetails', { series: data });
  };

  return (
    <Container
      onPress={handleNavigate}
      hasFixedSize={hasFixedSize}

    >
      <SeriesImage
        source={{ uri: image ? image.medium : imagePlaceholder }}
        resizeMode="cover"
        hasFixedSize={hasFixedSize}
      />
      <SeriesTitleText
        numberOfLines={1}
      >
        {name}
      </SeriesTitleText>
    </Container>
  );
};
