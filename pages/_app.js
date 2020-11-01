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
    :hover{
      text-decoration: underline
    }
  }
  img {
    :hover {
    cursor: pointer;
  }
}
  }

  * {
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <GlobalStyle />
      {router.pathname !== '/' && (
        <header>
          <Nav>
            <Link href="/">Back</Link>
          </Nav>
        </header>
      )}
      <Component {...pageProps} />
    </>
  );
}

const Nav = styled.nav`
  margin: 20px 20px;
  a {
    font-size: 35px;
  }
`;
