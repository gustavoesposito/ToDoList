import React, { useState } from 'react';
import { TextInput } from 'react-native';
import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import Item from '../../components/Item/Item';
import List from '../../components/List/List';
import { ContainerToDo } from '../../components/List/style';
import {
  Container,
  Header,
  Title,
  FormText,
  TitleList,
  ToDoList,
} from './styles';

export const Home: React.FunctionComponent = () => {
  const [newTask, setNewTask] = useState();
  const [tasks, setTasks] = useState([]);
  return (
    <Container>
      <Header>
        <Title>Lista de tarefas</Title>
        <FormText>Adicione um novo estudo</FormText>
        <TextInput />
        <Button title="Adicionar" />
      </Header>

      {/* parte de baixo */}

      <ContainerToDo>
        <TitleList>Tarefas do dia</TitleList>
        {tasks.map((item, index) => (
          <ToDoList key={index}>
            <Item task={item} />
          </ToDoList>
        ))}
      </ContainerToDo>
    </Container>
  );
};
