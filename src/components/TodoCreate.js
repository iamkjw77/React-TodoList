import React from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';

const CircleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);

  width: 80px;
  height: 80px;
  cursor: pointer;
  z-index: 5;
  font-size: ${({ theme }) => theme.fontSizes.titleSize};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;

  border: none;
  outline: none;

  background: ${({ theme }) => theme.colors.green};
  transition: 0.125s all ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.blue};
  }
  &:active {
    background: ${({ theme }) => theme.colors.green};
  }

  ${(props) =>
    props.open &&
    css`
      background: ${({ theme }) => theme.colors.red};
      &:hover {
        background: ${({ theme }) => theme.colors.violet};
      }
      &:active {
        background: ${({ theme }) => theme.colors.red};
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const InsertForm = styled.div``;

function TodoCreate() {
  const [open, setOpen] = React.useState(false);
  const onToggle = () => setOpen(!open);

  return (
    <CircleButton onClick={onToggle} open={open}>
      <MdAdd />
    </CircleButton>
  );
}

export default TodoCreate;
