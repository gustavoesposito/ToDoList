import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Button from '../../components/Button/Button';
import { ContainerToDo } from '../../components/List/style';
import Icon from '../../components/Icon/Icon';
import {
  Container,
  Header,
  HeaderToDo,
  ContainerHeader,
  Title,
  FormText,
  TitleList,
  TxtInput,
} from './styles';

interface Task {
  id: string;
  title: string;
}

export const Home: React.FunctionComponent = () => {
  const [newTask, setNewTask] = useState('');
  const [listTask, setListTask] = useState<Task[]>([]);

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
        <Title>Tarefas</Title>
        <Icon
          name="menu"
          bundle={'MaterialIcons'}
          size="giant"
          color="#ffdb77"
        />
      </ContainerHeader>

      <Header>
        <FormText>Adicione um novo estudo</FormText>
        <TxtInput placeholder="Adicione uma tarefa" onChangeText={setNewTask} />
        <Button title="Adicionar" onPress={addTask} />
      </Header>

      {/* parte de baixo */}
      <ContainerToDo>
        <HeaderToDo>
          <TitleList>Tarefas do dia</TitleList>
          {listTask.map(task => (
            <TouchableOpacity key={task.id}>
              <Text>{task.title}</Text>
            </TouchableOpacity>
          ))}
        </HeaderToDo>
      </ContainerToDo>
    </Container>
  );
};
