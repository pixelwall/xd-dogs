import styles from './_index.module.css'
import { Space, container } from '../components/utils'
import Link from 'next/link'
import Head from 'next/head'
import V from '../components/viewport'
import type { MenuModel } from '../lib/menu'
import 'twin.macro'

export default function MenuPage({ menus }: { menus: MenuModel[] }) {
  return (
    <>
      <Head>
        <title>Locations | XD Dogs - So Delicious</title>
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
                <h1 tw="italic font-bold text-6xl text-center" className="font-title">Locations</h1>
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
              <iframe
                src="https://calendar.google.com/calendar/embed?src=xddogs21%40gmail.com&ctz=America%2FLos_Angeles"
                style={{ border: 0, width: '100%' }}
                height="600"
                frameBorder={0}
                scrolling="no"
              />
            </V>
          </div>
        </div>
      </div>
    </>
  )
}
