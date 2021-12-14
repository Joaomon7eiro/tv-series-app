import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const EpisodeImage = styled.Image`
  width: 100%;
  height: 150px;

  border-radius: 12px;

  margin-top: 12px;
`;

export const TitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary.regular};
  font-size: 20px;

  margin-top: 12px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 14px;

  margin-top: 8px;
`;
