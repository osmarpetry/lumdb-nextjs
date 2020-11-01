import { useRouter } from 'next/router';
import Link from 'next/link';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    background-color: black;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

const Nav = styled.nav`
  margin: 20px 20px;
  a {
    font-size: 35px;
  }
`;

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {router.pathname !== '/' && (
          <header>
            <Nav>
              <Link href="/">Back</Link>
            </Nav>
          </header>
        )}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
