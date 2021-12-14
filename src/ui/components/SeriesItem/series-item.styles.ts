import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  margin: 8px 4px;

  border-radius: 12px;
`;

export const SeriesImage = styled.Image`
  width: 120px;
  height: 165px;

  border-radius: 12px;
`;

export const SeriesTitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14px;

  text-align: center;
  margin-top: 2px;
`;

export const SeriesContent = styled.View`
`;