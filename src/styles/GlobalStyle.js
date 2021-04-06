import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background: ${({ theme }) => theme.colors.black};
  }
`;

export default GlobalStyle;
