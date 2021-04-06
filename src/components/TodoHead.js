import { useTodoState } from 'contexts/todo';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
  padding: ${({ theme }) =>
    `${theme.paddings.lg} ${theme.paddings.base} ${theme.paddings.small}`};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray}`};

  time {
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    color: ${({ theme }) => theme.colors.black};
    font-weight: bold;
  }

  .day {
    display: block;
    margin-top: ${({ theme }) => theme.margins.small};
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.fontSizes.base};
  }

  .tasks-left {
    color: ${({ theme }) => theme.colors.pink};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin-top: ${({ theme }) => theme.margins.base};
    font-weight: bold;
  }
`;

function TodoHead() {
  const today = new Date();
  const day = today.getDay();
  const week = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const todos = useTodoState();
  const leftTodos = todos.filter((todo) => !todo.completed);

  return (
    <TodoHeadBlock>
      <time>
        {today.toString().slice(4, 15)}
        <span className="day">{week[day]}</span>
      </time>
      <div className="tasks-left">To do left: {leftTodos.length}</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
