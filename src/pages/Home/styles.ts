import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.black};
  align-items: center;
`;

export const ContainerToDo = styled.View`
  flex: 1;
  align-items: center;
`;
export const ContainerHeader = styled.View`
  flex-direction: row;
`;
export const HeaderFunc = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
`;

export const Btn = styled.View`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.gray800};
  width: 100px;
  height: 30px;
  padding-top: 15px;
  margin-top: 10px;
`;

export const ButtonSwitch = styled.View`
  color: ${({ theme }) => theme.colors.light};
  margin: 50px 15px 0 0;
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
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 10px;
  margin-top: 20px;
`;

export const TaskText = styled.Text`
  text-align: center;
  margin-top: -10px;
  color: ${({ theme }) => theme.colors.light};
`;

export const Title = styled.Text`
  margin-left: 15px;
  font-size: 40px;
  font-weight: bold;
  margin-top: 40px;
  color: ${({ theme }) => theme.colors.gray500};
`;

export const TitleList = styled.Text`
  color: ${({ theme }) => theme.colors.gray800};
  font-size: 26px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  margin-top: 17px;
`;

export const FormText = styled.Text`
  font-size: 26px;
  font-weight: bold;
`;

export const TxtInput = styled.TextInput.attrs({
  placeholderTextColor: '#a8a8b3',
})`
  width: 350px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 10px;
  margin: 30px;
  margin-top: 10px;
  padding-left: 10px;
`;
