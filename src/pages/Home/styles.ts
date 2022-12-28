import styled from 'styled-components/native';

export const Button = styled.Text`
  width: 30px;
  height: 30px;
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.light};
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 40px;
  font-weight: bold;
  margin-top: 90px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const TitleList = styled.Text`
  color: ${({ theme }) => theme.colors.gray800};
  font-size: 30px;
  align-items: center;
  justify-content: center;
`;

export const ToDoList = styled.View`
  width: 150px;
  height: 30px;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.gray500};
  border-radius: 5px;
  padding: 2px;
`;

export const FormText = styled.Text`
  font-size: 30px;
  margin-top: 10px;
`;

export const TxtInput = styled.TextInput`
  width: 350px;
  height: 30px;
  border-color: ${({ theme }) => theme.colors.success};
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 10px;
  margin: 10px;
  margin-top: 10px;
  padding-left: 10px;
`;
