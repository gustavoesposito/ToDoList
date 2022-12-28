import styled from 'styled-components/native';

export const ContainerButton = styled.TouchableOpacity`
  width: 200px;
  height: 35px;
  border-radius: 10px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray800};
  margin-bottom: 10px;
`;

export const MainButton = styled.View`
  color: ${({ theme }) => theme.colors.light};
`;

export const TextButton = styled.Text`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.light};
`;
