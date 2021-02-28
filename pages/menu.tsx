import styles from './_index.module.css'
import { Space, container } from '../components/utils'
import Link from 'next/link'
import Head from 'next/head'
import tw from 'twin.macro'
import V from '../components/viewport'
import { ReactNode, useEffect } from 'react'
import type { MenuType, Entry } from '../lib/menu'
import { menu, entries } from '../lib/menu'

const button = tw`text-transparent text-white rounded-full bg-gradient-to-r from-blue-200 to-pink-500 via-purple-400 animate-gradient-x transform hover:scale-95 duration-200`

const capitalizeFirstLetter = (string: string) => (string.charAt(0).toUpperCase() + string.slice(1).toLowerCase())

const Card = ({title, children}: { title: string, children?: ReactNode, idx: number }) => (
  <V className="animate" tw="my-16 mt-8" style={{['--animate-y' as any]: `-1rem`}} oneWay>
    <div className="card">
      <h1 tw="font-bold text-4xl mb-4" className="font-title">{title}</h1>
      {children}
    </div>
  </V>
)

const Menu = () => (
  <>
    {menu.map((v: MenuType, i: number) => (
      <Card title={v.title} key={i} idx={i}>
        {v.menu.map((v: Entry, i: number) => (
          <ul style={{listStyleType: 'circle'}} key={i} tw="pl-6 space-y-6 my-2" className="t-p">
            <li>
              <div tw="font-bold">{v.title}</div>
              {v.contains && <ul style={{listStyleType: 'circle'}} key={i} tw="pl-6">
                  {v.contains.map((c: string, i: number) => (
                    <li key={i}>{capitalizeFirstLetter(c)}</li>
                  ))}
                </ul>
              }
            </li>
          </ul>
        ))}
      </Card>
    ))}
  </>
)

const Order = () => (
  <a
    href="https://the.ordering.app/"
    rel="nofollow noopener noreferrer"
    target="_blank"
  >
    <div tw="px-6 py-4 mx-auto flex font-bold" css={button}>Order now!</div>
  </a>
)

export default function MenuPage() {
  console.log(entries)
  return (
    <>
      <Head>
        <title>Our menu | XD Dogs - So Delicious</title>
      </Head>
      <Space>
        <div tw="min-h-screen w-full text-white">
          <div css={container} tw="py-16">
            <Link href="/">
              <a><img src="/images/logo.webp" className={styles.logo} tw="w-3/5 sm:w-2/5 lg:w-1/5 h-auto" alt="XD Dogs"/></a>
            </Link>
            <V className="animate" tw="my-8 mt-8" style={{['--animate-x' as any]: '-3rem'}} once>
              <h1 tw="italic font-bold text-6xl text-center" className="font-title">See our menu</h1>
            </V>

            <V tw="flex w-full" className="t-h3 animate" style={{['--animate-x' as any]: '3rem'}} oneWay>
              <div tw="ml-auto flex italic" className="t-h3">
                <Order/>
              </div>
            </V>
            <Menu/>

            <V tw="flex w-full" className="t-h3 animate" oneWay style={{['--animate-y' as any]: '1rem'}}>
              <div tw="mx-auto flex italic" className="t-h3">
                <Order/>
              </div>
            </V>
          </div>
          <div className={styles.heroDivider} tw="pointer-events-none">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
            </svg>
          </div>
        </div>
      </Space>
    </>
  )
}
