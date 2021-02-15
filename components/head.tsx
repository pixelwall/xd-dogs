import { ReactNode } from 'react'
import NextHead from 'next/head'
import GoogleFonts from 'next-google-fonts'
import Favicons from './favicons'

export default function Head({ children }: { children?: ReactNode }) {
  return (
    <>
      <GoogleFonts
        href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;500;800&family=Roboto:wght@300;400;700;900&display=swap"
      />
      <NextHead>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        {children}
      </NextHead>
      <Favicons/>
    </>
  )
}
