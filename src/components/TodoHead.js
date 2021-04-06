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
  return (
    <TodoHeadBlock>
      <time>
        2021년 4월 6일
        <span className="day">화요일</span>
      </time>
      <ul className="tasks-left">할 일 2개 남음</ul>
    </TodoHeadBlock>
  );
}

export default TodoHead;
