import { useNavigation } from '@react-navigation/native';
import React, { memo } from 'react';
import { Series } from '../../../app/redux/reducers/series.reducer';
import imagePlaceholder from '../../../utils/image-placeholder.util';

import {
  Container,
  SeriesImage,
  SeriesTitleText,
} from './series-item.styles';

type SeriesItemProps = {
  data: Series,
  hasFixedSize?: boolean
}

const SeriesItem: React.FC<SeriesItemProps> = ({ data, hasFixedSize = false }) => {
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
        source={{ uri: image ? image.original : imagePlaceholder }}
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

export { SeriesItem };
