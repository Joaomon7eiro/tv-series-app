import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const PersonImage = styled.Image`
  width: 100%;
  height: 500px;
`;

export const TitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary.regular};
  font-size: 24px;

  margin-top: 8px;

  text-align: center;
`;

export const SeriesTitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 18px;

  margin-left: 20px;
  margin-top: 20px;
`;
