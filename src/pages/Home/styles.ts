import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.light};
  align-items: center;
`;

export const ContainerToDo = styled.View`
  flex: 1;
  align-items: center;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  width: 365px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 10px;
  align-items: center;
  margin: 10px;
  margin-top: 20px;
`;

export const HeaderToDo = styled.View`
  align-items: center;
  width: 365px;
  height: 500px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: 40px;
  font-weight: bold;
  margin-top: 40px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const TitleList = styled.Text`
  color: ${({ theme }) => theme.colors.gray800};
  font-size: 26px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  margin-top: 17px;
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
  font-size: 26px;
  font-weight: bold;
`;

export const TxtInput = styled.TextInput.attrs({
  placeholderTextColor:'#a8a8b3'
})`
  width: 350px;
  height: 30px;
  border-color: ${({ theme }) => theme.colors.success};
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 10px;
  margin: 30px;
  margin-top: 10px;
  padding-left: 10px;
`;
