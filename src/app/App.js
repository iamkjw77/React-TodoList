import { ThemeProvider } from 'styled-components';
import theme from 'theme/theme';
import GlobalStyle from 'styles/GlobalStyle';
import TodoTemplate from 'components/TodoTemplate';
import TodoHead from 'components/TodoHead';
import TodoList from 'components/TodoList';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
      </TodoTemplate>
    </ThemeProvider>
  );
}

export default App;
