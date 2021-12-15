import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const PersonImage = styled.ImageBackground`
  width: 100%;
  height: 500px;
`;

export const TitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary.regular};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};

  margin-top: 8px;

  text-align: center;
`;

export const SeriesTitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};

  margin-left: 20px;
  margin-top: 20px;
`;
