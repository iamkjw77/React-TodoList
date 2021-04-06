import React from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from 'contexts/todo';

const CircleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 50%;
  bottom: 0;
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

const InsertForm = styled.form`
  background: ${({ theme }) => theme.colors.lightGray};
  padding: ${({ theme }) => theme.paddings.base};
  padding-bottom: ${({ theme }) => theme.paddings.xl};
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.paddings.small};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  width: 100%;
  outline: none;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

function TodoCreate() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (open) inputRef.current.focus();
  }, [open]);

  const onToggle = () => setOpen(!open);
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      todo: { id: nextId.current, content: value, completed: false },
    });
    nextId.current += 1;
    setValue('');
    setOpen(false);
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              placeholder="Enter your to-do!"
              onChange={onChange}
              value={value}
              ref={inputRef}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default React.memo(TodoCreate);
