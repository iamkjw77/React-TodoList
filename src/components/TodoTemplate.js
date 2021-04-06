import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  display: flex;
  flex-flow: column wrap;
  position: relative;
  width: 512px;
  height: 768px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.interval.base};
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
