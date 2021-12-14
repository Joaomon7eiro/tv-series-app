import React from 'react';
import { Episode } from '../../../app/redux/reducers/episodes.reducer';

import {
  Container,
  EpisodeImage,
  TitleText,
  Description,
} from './episode-item.styles';

type EpisodeItemProps = {
  data: Episode
}

export function EpisodeItem({ data }: EpisodeItemProps) {
  return (
    <Container>
      <EpisodeImage source={{ uri: data.image?.original }} />
      <TitleText>{data.number}. {data.name}</TitleText>
      <Description>{data.summary}</Description>
    </Container>
  );
}