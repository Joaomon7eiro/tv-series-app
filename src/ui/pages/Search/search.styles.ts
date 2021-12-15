import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
`;

export const SearchWrapper = styled.View`
  margin: 8px;
`;

export const SearchTitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary.regular};
  font-size: 36px;
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.text};

`;

export const SearchInput = styled.TextInput`
  width: 100%;
  height: 80px;

  padding: 0 12px;

  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};

  border-width: 1px;
  border-color: #bbb;

  border-radius: 14px;
  background-color: #ddd;
`;
