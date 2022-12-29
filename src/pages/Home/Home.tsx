import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Item from '../../components/Item/Item';
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
  ToDoList,
  TxtInput,
} from './styles';

export const Home: React.FunctionComponent = () => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  return (
    <Container>
      <ContainerHeader>
        <Title>Tarefas</Title>
        <Icon
          name="menu"
          bundle={'MaterialIcons'}
          size="giant"
          onPress={AddTask}
          color="#ffdb77"
        />
      </ContainerHeader>

      <Header>
        <FormText>Adicione um novo estudo</FormText>
        <TxtInput placeholder="Adicione uma tarefa" onChangeText={setNewTask} />
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
