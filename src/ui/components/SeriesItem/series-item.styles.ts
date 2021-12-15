import styled, { css } from 'styled-components/native';

type SeriesItemProps = {
  hasFixedSize: boolean;
}

export const Container = styled.TouchableOpacity <SeriesItemProps>`
  flex: 1;
  border-radius: 12px;
  margin: 8px;
  ${({ hasFixedSize }) => hasFixedSize && css`
    width: 200px;
  `}
`;

export const SeriesImage = styled.Image <SeriesItemProps>`
  ${({ hasFixedSize }) => hasFixedSize && css`
    width: 200px;
  `}
  height: 150px;
  border-radius: 12px;
`;

export const SeriesTitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};

  text-align: center;
  margin-top: 2px;
`;
