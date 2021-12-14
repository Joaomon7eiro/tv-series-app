import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const SearchWrapper = styled.View`
  margin: 8px;
`;

export const SearchInput = styled.TextInput`
  width: 100%;
  height: 80px;

  padding: 0 12px;

  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 18px;

  border-width: 1px;
  border-color: #bbb;

  border-radius: 14px;
  background-color: #ddd;
`;