import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';
import { getCastCreditsByPersonId } from '../../../app/redux/actions/cast-credits.actions';
import { Person } from '../../../app/redux/reducers/search.reducer';
import { useAppDispatch, useAppSelector } from '../../../hooks/custom-hooks';
import imagePlaceholder from '../../../utils/image-placeholder.util';
import { SeriesItem } from '../../components/SeriesItem/series-item.component';

import {
  Container,
  PersonImage,
  TitleText,
  SeriesTitleText,
} from './person-details.styles';

type RouteParams = {
  person: Person
}

export const PersonDetails: React.FC = () => {
  const route = useRoute();
  const { person: { name, image, id } } = route.params as RouteParams;
  const theme = useTheme();

  const series = useAppSelector((state) => state.castCredits);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCastCreditsByPersonId(id));
  }, [id]);

  return (
    <Container>
      <PersonImage source={{ uri: image ? image.original : imagePlaceholder }}>
        <LinearGradient
          colors={['transparent', 'rgba(100, 100, 100, 0.5)', theme.colors.background]}
          style={{ flex: 1, justifyContent: 'center' }}
        />
      </PersonImage>

      <TitleText>{name}</TitleText>

      {series.length
        ? <SeriesTitleText>Series:</SeriesTitleText> : null}
      <FlatList
        data={series}
        keyExtractor={(item) => String(item.id)}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 12,
        }}
        renderItem={({ item }) => <SeriesItem data={item} hasFixedSize />}
      />
    </Container>
  );
};
