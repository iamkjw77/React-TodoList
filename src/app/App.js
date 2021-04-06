import { ThemeProvider } from 'styled-components';
import theme from 'theme/theme';
import GlobalStyle from 'styles/GlobalStyle';
import TodoTemplate from 'components/TodoTemplate';
import TodoHead from 'components/TodoHead';
import TodoList from 'components/TodoList';
import TodoCreate from 'components/TodoCreate';
import { TodoProvider } from 'contexts/todo';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TodoProvider>
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
