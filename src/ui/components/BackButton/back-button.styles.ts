import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 50px;
  width: 50px

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray};
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.primaryDark};

  position: absolute;
  top: 20px;
  left: 20px;

  align-items: center;
  justify-content: center;
`;
