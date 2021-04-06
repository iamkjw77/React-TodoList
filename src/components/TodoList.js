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
  return (
    <TodoListBlock>
      <TodoItem text="프로젝트 생성" done></TodoItem>
      <TodoItem text="프로젝트 생성" done></TodoItem>
      <TodoItem text="프로젝트 생성" done></TodoItem>
      <TodoItem text="프로젝트 생성" done></TodoItem>
      <TodoItem text="프로젝트 생성" done></TodoItem>
    </TodoListBlock>
  );
}

export default TodoList;
