import styled from 'styled-components';

const TodoListBlock = styled.div`
  flex: 1;
  padding: ${({ theme }) =>
    `${theme.paddings.small} ${theme.paddings.base} ${theme.paddings.lg}`};
  overflow-y: auto;
  /* background-color: ${({ theme }) => theme.colors.gray}; */
`;

function TodoList() {
  return <TodoListBlock>TodoList</TodoListBlock>;
}

export default TodoList;
