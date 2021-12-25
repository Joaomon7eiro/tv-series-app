import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Series } from '../../../types/series';

export const Container = styled(LinearGradient)`
  flex: 1;
`;

export const SeriesFlatlist = styled(FlatList as new () => FlatList<Series>)`
  flex: 1;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary.regular};
  font-size: 52px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  
  padding: 24px;
  margin-bottom: 32px;
`;
