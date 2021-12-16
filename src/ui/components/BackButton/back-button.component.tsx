import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
} from './back-button.styles';

export const BackButton: React.FC<TouchableOpacityProps> = () => {
  const theme = useTheme();
  const { goBack } = useNavigation();

  return (
    <Container onPress={goBack}>
      <Ionicons name="arrow-back" size={30} color={theme.colors.light} />
    </Container>
  );
};
