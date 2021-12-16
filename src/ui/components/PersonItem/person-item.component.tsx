import React from 'react';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  PersonImage,
  PersonNameText,
} from './person-item.styles';
import imagePlaceholder from '../../../utils/image-placeholder.util';
import { Person } from '../../../app/redux/reducers/search.reducer';

type PersonItemProps = {
  data: Person,
}

export const PersonItem: React.FC<PersonItemProps> = ({ data }) => {
  const navigation = useNavigation();
  const { name, image } = data;

  const handleNavigate = () => {
    navigation.navigate('PersonDetails', { person: data });
  };

  return (
    <Container onPress={handleNavigate}>
      <PersonImage
        source={{ uri: image ? image.original : imagePlaceholder }}
        resizeMode="cover"
      />
      <PersonNameText>{name}</PersonNameText>
    </Container>
  );
};
