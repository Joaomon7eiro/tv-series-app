import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 24px;
`;

export const EpisodeImage = styled.Image`
  width: 140px;
  height: 80px;

  border-radius: 12px;

`;

export const TitleWrapper = styled.View`
  flex:1;
`;

export const TitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;

  margin-left: 16px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};

  margin-top: 4px;
`;
