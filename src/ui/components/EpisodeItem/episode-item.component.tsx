import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Episode } from '../../../app/redux/reducers/episodes.reducer';

import {
  Container,
  Header,
  EpisodeImage,
  TitleWrapper,
  TitleText,
  Description,
} from './episode-item.styles';

type EpisodeItemProps = {
  data: Episode
}

export function EpisodeItem({ data }: EpisodeItemProps) {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('EpisodeDetails', { episode: data });
  }

  return (
    <Container onPress={handleNavigation}>
      <Header>
        <EpisodeImage source={{ uri: data.image ? data.image.original : 'https://plchldr.co/i/500x250?text=tv-series' }} />
        <TitleWrapper>
          <TitleText>{data.number}. {data.name}</TitleText>

        </TitleWrapper>
      </Header>
      <Description>{data.summary}</Description>
    </Container>
  );
}