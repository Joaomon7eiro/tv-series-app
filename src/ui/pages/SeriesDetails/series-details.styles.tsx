import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Content = styled.View`
  padding: 0 20px 20px;
`;

export const SeriesImage = styled.Image`
  width: 100%;
  height: 600px;

  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

export const TitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary.regular};
  font-size: 36px;

  margin-top: 20px;
`;

export const SeriesSubtitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Schedule = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 14px;
`;

export const Genres = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 14px;
`;

export const SummaryText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 18px;

  margin-top: 20px;
`;
