import '../styles/index.css'
import '../styles/navigation.css'

import type { AppProps } from 'next/app'

import Head from '../components/head'
import Navbar from '../components/navigation/navbar'
import GlobalStyles from '../components/GlobalStyles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>XD Dogs - So Delicious</title>
        <meta name="description" content="We are so delicious"/>
      </Head>

      <GlobalStyles />

      <Navbar/>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}
