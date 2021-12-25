import { useRoute } from '@react-navigation/native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import imagePlaceholder from '../../../utils/image-placeholder.util';
import { SeriesItem } from '../../components/SeriesItem/series-item.component';

import {
  Container,
  PersonImage,
  TitleText,
  SeriesTitleText,
  Header,
} from './person-details.styles';
import { BackButton } from '../../components/BackButton/back-button.component';
import { useCastCredit } from '../../../hooks/cast-credit.hook';
import { Person } from '../../../types/series';

type RouteParams = {
  person: Person
}

export const PersonDetails: React.FC = () => {
  const route = useRoute();
  const { person: { name, image, id } } = route.params as RouteParams;
  const theme = useTheme();

  const { data: series } = useCastCredit(id);

  return (
    <Container>
      <SafeAreaView>
        <Header>
          <PersonImage source={{ uri: image ? image.original : imagePlaceholder }}>
            <LinearGradient
              colors={['transparent', 'rgba(100, 100, 100, 0.5)', theme.colors.background]}
              style={{ flex: 1, justifyContent: 'center' }}
            />
          </PersonImage>
          <BackButton />
        </Header>

        <TitleText>{name}</TitleText>

        {series?.length
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
      </SafeAreaView>

    </Container>
  );
};
