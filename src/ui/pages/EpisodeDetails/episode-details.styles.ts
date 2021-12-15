import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const EpisodeImage = styled.Image`
  width: 100%;
  height: 500px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary.regular};
  font-size: 24px;

  margin-top: 8px;
  color: ${({ theme }) => theme.colors.text};

  text-align: center;
`;

export const Summary = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};

  margin: 20px;
`;
