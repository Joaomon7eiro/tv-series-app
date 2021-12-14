import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  border-radius: 12px;
  margin: 8px;
`;

export const SeriesImage = styled.Image`
  height: 150px;
  border-radius: 12px;
`;

export const SeriesTitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14px;

  text-align: center;
  margin-top: 2px;
`;

