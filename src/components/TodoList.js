import { useTodoState } from 'contexts/todo';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.ul`
  flex: 1;
  padding: ${({ theme }) =>
    `${theme.paddings.small} ${theme.paddings.base} ${theme.paddings.lg}`};
  overflow-y: auto;
  /* background-color: ${({ theme }) => theme.colors.gray}; */
`;

function TodoList() {
  const todos = useTodoState();

  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.content}
          done={todo.completed}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
