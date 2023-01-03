import React, { useContext, useState } from 'react';
import { Switch, ScrollView, Text, TouchableOpacity } from 'react-native';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';
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

export const Home: React.FC = () => {
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

    function handleRemoveToDo() {}
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
          <ScrollView>
            {listTask.map(task => (
              // eslint-disable-next-line react/jsx-key
              <>
                <Icon
                  name="trash-can"
                  bundle={'MaterialCommunityIcons'}
                  size="huge"
                  color="#e83f5b"
                />
                <Btn>
                  <TouchableOpacity key={task.id}>
                    <TaskText>
                      <Text>{task.title}</Text>
                    </TaskText>
                  </TouchableOpacity>
                </Btn>
              </>
            ))}
          </ScrollView>
        </HeaderToDo>
      </ContainerToDo>
    </Container>
  );
};
