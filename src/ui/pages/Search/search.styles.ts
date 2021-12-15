import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient)`
  flex:1;
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
  height: 60px;

  padding: 0 12px;

  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};

  border-width: 1px;
  border-color: #bbb;

  border-radius: 14px;
  background-color: #ddd;
`;
