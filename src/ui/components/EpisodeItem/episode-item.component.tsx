import { useNavigation } from '@react-navigation/native';
import React, { memo } from 'react';
import { Episode } from '../../../app/redux/reducers/episodes.reducer';
import imagePlaceholder from '../../../utils/image-placeholder.util';

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

const EpisodeItem: React.FC<EpisodeItemProps> = ({ data }: EpisodeItemProps) => {
  const navigation = useNavigation();
  const {
    name, image, number, summary,
  } = data;

  const handleNavigation = () => {
    navigation.navigate('EpisodeDetails', { episode: data });
  };

  const episodeNumber = number ? `${number}.` : '';

  return (
    <Container onPress={handleNavigation}>
      <Header>
        <EpisodeImage source={{ uri: image ? image.original : imagePlaceholder }} />
        <TitleWrapper>
          <TitleText>{`${episodeNumber} ${name}`}</TitleText>
        </TitleWrapper>
      </Header>
      <Description>{summary}</Description>
    </Container>
  );
};

export { EpisodeItem };
