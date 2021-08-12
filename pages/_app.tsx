import '../styles/index.css'

import type { AppProps } from 'next/app'

import NextHead from 'next/head'
import Navbar from '../components/navigation/navbar'
import GlobalStyles from '../components/GlobalStyles'
import { GoogleFonts } from '../components/google-fonts'
import Favicons from '../components/favicons'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleFonts 
        families={['Merriweather+Sans:wght@300;400;500;800', 'Roboto:wght@300;400;700;900']}
        display="swap"
      />

      <Favicons/>

      <NextHead>
        <title>XD Dogs - So Delicious</title>
        <meta name="description" content="We are so delicious"/>
      </NextHead>

      <GlobalStyles />

      <Navbar/>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}
