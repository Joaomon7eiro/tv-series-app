import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';
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

  const series = useAppSelector((state) => state.castCredits);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCastCreditsByPersonId(id));
  }, [id, dispatch]);

  return (
    <Container>
      <PersonImage source={{ uri: image ? image.original : imagePlaceholder }} />

      <TitleText>{name}</TitleText>

      <SeriesTitleText>Series:</SeriesTitleText>
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
