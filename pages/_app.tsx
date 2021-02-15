// import '../styles/reset.css'
import '../styles/index.css'
import '../styles/navigation.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'

import Favicons from '../components/favicons'
import Navbar from '../components/navigation/navbar'
import GlobalStyles from '../components/GlobalStyles'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('webfontloader').then(wf => {
        wf.load({
          google: {
            families: ['Roboto:300,400,800,900', 'Merriweather+Sans:300,400,800,900', 'Inconsolata']
          }
        })
      })
    }
  })
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>XD Dogs - So Delicious</title>
      </Head>

      <Favicons/>
      <GlobalStyles />

      <Navbar/>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}
