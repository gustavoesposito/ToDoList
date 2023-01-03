import React, { useContext, useState } from 'react';
import { Switch, Text, TouchableOpacity } from 'react-native';
import Button from '../../components/Button/Button';
import { ContainerToDo } from '../../components/List/style';
import { T } from '../../global/styles/Texts';
import { ThemeContext, ThemeType } from '../../global/Theme/Theme';
import {
  Btn,
  Container,
  Header,
  HeaderToDo,
  HeaderFunc,
  ContainerHeader,
  Title,
  ButtonSwitch,
  FormText,
  TitleList,
  TxtInput,
  TaskText,
} from './styles';

interface Task {
  id: string;
  title: string;
}

export const Home: React.FunctionComponent = () => {
  const [newTask, setNewTask] = useState('');
  const [listTask, setListTask] = useState<Task[]>([]);

  const { toggleTheme, theme } = useContext(ThemeContext);

  const darkModeIsEnabled = theme === ThemeType.dark;

  const addTask = () => {
    const data = {
      id: String(new Date().getTime()),
      title: newTask ? newTask : 'Lista Vazia',
    };
    setListTask([...listTask, data]);
  };
  return (
    <Container>
      <ContainerHeader>
        <HeaderFunc>
          <Title>Tarefas</Title>
          <ButtonSwitch>
            <T>Tema</T>
            <Switch onValueChange={toggleTheme} value={darkModeIsEnabled} />
          </ButtonSwitch>
          {/* <Icon
            name="menu"
            bundle={'MaterialIcons'}
            size="giant"
            color="#ffdb77"
          /> */}
        </HeaderFunc>
      </ContainerHeader>

      <Header>
        <FormText>Adicione Tarefas</FormText>
        <TxtInput placeholder="Adicione uma tarefa" onChangeText={setNewTask} />
        <Button title="Adicionar" onPress={addTask} />
      </Header>

      {/* parte de baixo */}
      <ContainerToDo>
        <HeaderToDo>
          <TitleList>Tarefas do dia</TitleList>
          {listTask.map(task => (
            <Btn>
              <TouchableOpacity key={task.id}>
                <TaskText>
                  <Text>{task.title}</Text>
                </TaskText>
              </TouchableOpacity>
            </Btn>
          ))}
        </HeaderToDo>
      </ContainerToDo>
    </Container>
  );
};
