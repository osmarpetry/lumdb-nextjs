import Link from 'next/link'
import Head from 'next/head'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
      padding: 0;
      margin: 0;
      background-color: black;
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
    color: #ffff;
    :hover {
    cursor: pointer;
    }
  }

  * {
    box-sizing: border-box;
  }
`

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Head>
                <title>LUMDB</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className='App'>
                <header
                    style={{
                        padding: '30px',
                        width: '100%',
                        textAlign: 'center'
                    }}>
                    <Link href='/'>
                        <img src='/logo.svg' className='App-logo' alt='logo' />
                    </Link>
                </header>
                <main className='App-main'>
                    <Component {...pageProps} />
                </main>
            </div>
        </>
    )
}
