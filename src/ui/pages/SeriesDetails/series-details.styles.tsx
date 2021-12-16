import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  padding: 0 20px 20px;
`;

export const SeriesImage = styled.ImageBackground`
  width: 100%;
  height: 600px;

  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

export const ContentHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: -30px;
  margin-bottom: 8px;
`;

export const Header = styled.View`
`;

export const FavoriteButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const TitleWrapper = styled.View`
  flex:1;
`;

export const TitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary.regular};
  font-size: 36px;
  color: ${({ theme }) => theme.colors.text};

`;

export const SeriesSubtitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Schedule = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};

  max-width: 50%;
`;

export const Genres = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  max-width: 50%;
`;

export const SummaryText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};

  margin-top: 20px;
`;
