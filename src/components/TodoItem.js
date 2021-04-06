import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from 'contexts/todo';

const CheckCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  margin-right: ${({ theme }) => theme.margins.small};
  cursor: pointer;

  ${(props) =>
    props.done &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.green};
      color: ${({ theme }) => theme.colors.green};
    `}
`;
const Text = styled.div`
  flex: 1;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.black};
  ${(props) =>
    props.done &&
    css`
      color: ${({ theme }) => theme.colors.gray};
    `}
`;
const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  &:hover {
    color: ${({ theme }) => theme.colors.red};
  }
`;
const TodoItemBlock = styled.li`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.paddings.small} 0;
  &:hover {
    ${Remove} {
      opacity: 1;
    }
  }
`;

function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();

  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });

  return (
    <TodoItemBlock key={id} id={id}>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);
