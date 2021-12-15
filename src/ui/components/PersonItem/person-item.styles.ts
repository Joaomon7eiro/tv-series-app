import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  border-radius: 12px;
  margin: 8px;
`;

export const PersonImage = styled.Image`
  width: 200px;
  height: 150px;
  border-radius: 12px;
`;

export const PersonNameText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};

  text-align: center;
  margin-top: 2px;
`;
