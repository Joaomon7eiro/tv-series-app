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

function areEqual(prevProps: EpisodeItemProps, nextProps: EpisodeItemProps) {
  return prevProps.data.id === nextProps.data.id;
}

const EpisodeItemComponent: React.FC<EpisodeItemProps> = ({ data }: EpisodeItemProps) => {
  const navigation = useNavigation();
  const {
    name, image, number, summary,
  } = data;

  const handleNavigation = () => {
    navigation.navigate('EpisodeDetails', { episode: data });
  };

  return (
    <Container onPress={handleNavigation}>
      <Header>
        <EpisodeImage source={{ uri: image ? image.original : imagePlaceholder }} />
        <TitleWrapper>
          <TitleText>{`${number}. ${name}`}</TitleText>

        </TitleWrapper>
      </Header>
      <Description>{summary}</Description>
    </Container>
  );
};

const EpisodeItem = memo(EpisodeItemComponent, areEqual);
export { EpisodeItem };
