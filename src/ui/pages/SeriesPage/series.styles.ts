import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { Series } from '../../../app/redux/reducers/series.reducer';

export const Container = styled.View`
  flex: 1;
`;

export const SeriesFlatlist = styled(FlatList as new () => FlatList<Series>)`
  flex: 1;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary.regular}
  font-size: 52px;
  font-weight: bold;
  
  padding: 24px;
  margin-bottom: 32px;
`;

