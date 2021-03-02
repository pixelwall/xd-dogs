import styles from '../_index.module.css'
import { Space, container } from '../../components/utils'
import Link from 'next/link'
import Head from 'next/head'
import V from '../../components/viewport'
import type { MenuModel } from '../../lib/menu'
import { request } from '../../lib/datocms'
import 'twin.macro'

const MENU_QUERY = `
query {
  allMenus {
    slug
    title
    entries {
      title
      contains
    }
  }
}`

export async function getStaticProps() {
  const { allMenus }: {
    allMenus?: MenuModel[]
  } = await request({
    query: MENU_QUERY,
  })
  return {
    props: {
      menus: allMenus
    },
  }
}

export default function MenuPage({ menus }: { menus: MenuModel[] }) {
  return (
    <>
      <Head>
        <title>Our menu | XD Dogs - So Delicious</title>
      </Head>
      <div tw="min-h-screen flex flex-col">
        <Space>
          <div tw="w-full text-white">
            <div css={container} tw="py-16">
              <div tw="mx-auto">
                <Link href="/">
                  <a><img src="/images/logo.webp" className={styles.logo} tw="w-3/5 sm:w-2/5 lg:w-1/5 h-auto" alt="XD Dogs"/></a>
                </Link>
              </div>
              <V className="animate" tw="my-8 mt-8" style={{['--animate-x' as any]: '-3rem'}} once>
                <h1 tw="italic font-bold text-6xl text-center" className="font-title">See our menu</h1>
              </V>
            </div>
            <div className={styles.heroDivider} tw="pointer-events-none">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
              </svg>
            </div>
          </div>
        </Space>
        <div
          tw="flex-grow"
          className={styles.intro}
          style={{padding: '3rem 0', overflow: 'hidden'}}
        >
          <div className="text-white content">
            <V
              className="animate"
              tw="my-8 mt-8"
              style={{['--animate-x' as any]: '-1rem'}}
              once
            >
              <h2 tw="font-bold text-2xl italic" className="font-title">Select a menu:</h2>
            </V>
            <div tw="flex flex-col space-y-4">
              {menus.map((m, i) => (
                <V
                  className="flex animate"
                  style={{['--animate-x' as any]: '-3rem'}}
                  once
                  key={i}
                >
                  <Link
                    href={{
                      pathname: '/menu/[slug]',
                      query: { slug: m.slug },
                    }}
                  >
                    <a style={{display: 'flex'}}>
                      <div
                        tw="
                        text-4xl lg:text-6xl font-bold text-purple-200 z-20 italic
                        w-auto
                        pr-6
                        py-4
                        transform hover:scale-95 duration-200
                        "
                        className="font-title"
                      ><span tw="underline">{m.title}</span> <span tw="
                        text-transparent bg-gradient-to-r from-blue-200 to-pink-500 via-purple-400 animate-gradient-x bg-clip-text
                      ">&gt;</span></div>
                    </a>
                 </Link>
                </V>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
