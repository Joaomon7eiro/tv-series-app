import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary.regular}
  font-size: 52px;
  font-weight: bold;
  
  padding: 24px;
  margin-bottom: 32px;
`;
