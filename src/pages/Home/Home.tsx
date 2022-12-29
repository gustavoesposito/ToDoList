import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Item from '../../components/Item/Item';
import { ContainerToDo } from '../../components/List/style';
import {
  Container,
  Header,
  Title,
  FormText,
  TitleList,
  ToDoList,
  TxtInput,
  HeaderToDo,
} from './styles';

export const Home: React.FunctionComponent = () => {
  const [newTask, setNewTask] = useState();
  const [tasks, setTasks] = useState([]);
  return (
    <Container>
      <Title>Tarefas</Title>
      <Header>
        <FormText>Adicione um novo estudo</FormText>
        <TxtInput placeholder="Adicione uma tarefa" />
        <Button title="Adicionar" />
      </Header>

      {/* parte de baixo */}

      <ContainerToDo>
        <HeaderToDo>
          <TitleList>Tarefas do dia</TitleList>
          {tasks.map((item, index) => (
            <ToDoList key={index}>
              <Item task={item} />
            </ToDoList>
          ))}
        </HeaderToDo>
      </ContainerToDo>
    </Container>
  );
};
