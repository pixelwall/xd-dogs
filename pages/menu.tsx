import styles from './_index.module.css'
import { Space, container } from '../components/utils'
import Link from 'next/link'
import Head from 'next/head'
import tw from 'twin.macro'
import V from '../components/viewport'
import type { ReactNode } from 'react'

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

interface Entry {
  title: string
  contains?: string[]
}

interface MenuType {
  title: string
  menu: Entry[]
}

const menu: MenuType[] = [
  {
    title: 'Hot Dogs',
    menu: [
      {
        title: 'Flaming Dog',
        contains: [
          'All beef dog',
          'Grill onions',
          'Ranch',
          'Flaming Cheetos',
        ],
      },
      {
        title: 'Pineapple Express',
        contains: [
          'All beef dog',
          'Grill pineapple',
          'Pickle red onions',
          'Bacon',
          'BBQ Source',
        ],
      },
      {
        title: 'Cali Dog',
        contains: [
          'All beef dog',
          'Basil Aioli',
          'Pico de gallo',
          'Pickled red onions',
          'Banana peppers',
          'Cilantro',
        ],
      },
      {
        title: 'Mediterranean Dog',
        contains: [
          'All beef dog',
          'Lemon Aioli',
          'Banana peppers',
          'Tomato',
          'Pickled red onions',
          'Feta cheese',
        ],
      },
      {
        title: 'Mexi Dog',
        contains: [
          'Spicy sausage',
          'Pico de gallo',
          'Pepper jack cheese',
          'Spicy aioli',
          'Cilantro',
          'Fried jalapeño',
        ],
      },
      {
        title: 'Bratwurst',
        contains: [
          'Brat',
          'Gridle onionst',
          'Sauté pepperst',
          'German aiolit',
        ],
      },
      {
        title: 'Buffalo chicken hotdog',
        contains: [
          'Chicken sausage',
          'Buffalo sauce',
          'Ranch',
          'Lemon potatoes chips',
          'Green onions',
        ],
      },
    ],
  },
  {
    title: 'Sandwiches',
    menu: [
      {
        title: 'Cochinita sandwich',
        contains: [
          'French sandwich roll',
          'Cochinita pibil ( south Mexican pork dish)',
          'Spicy aioli',
          'Pickle red onions',
          'Cilantro',
        ],
      },
      {
        title: 'Caribean pork sandwich',
        contains: [
          'French sandwich roll',
          'Slow cook pork',
          'Caramelized onions',
          'Jalapeños',
          'Cilantro',
          'Garlic aioli',
        ],
      },
      {
        title: 'Choripan sandwich',
        contains: [
          'Spicy sausage',
          'Sauté onions',
          'Sauté peppers',
          'Básil aioli',
        ],
      },
    ],
  },
  {
    title: 'Burgers',
    menu: [
      {
        title: 'Cochinita sandwich',
        contains: [
          'All beef dog',
          'Grill onions',
          'Ranch',
          'Flaming Cheetos',
        ],
      },
      {
        title: 'Caribean pork sandwich',
        contains: [
          'All beef dog',
          'Grill pineapple',
          'Pickle red onions',
          'Bacon',
          'BBQ Source',
        ],
      },
      {
        title: 'Choripan sandwich',
        contains: [
          'All beef dog',
          'Basil Aioli',
          'Pico de gallo',
          'Pickled red onions',
          'Banana peppers',
          'Cilantro',
        ],
      },
    ],
  },
  {
    title: 'Kids menu',
    menu: [
      {
        title: 'Kids hot dog',
        contains: [
          'All beef dog',
        ],
      },
      {
        title: 'Kids burger',
        contains: [
          '1/3 # wayu beef patty',
          'American cheese',
          'Pickles',
          'Ketchup',
        ],
      },
      {
        title: 'Kids chicken tenders',
        contains: [
          'Chicken tenders',
          'Fries',
        ],
      },
    ],
  },
  {
    title: 'Loaded fries',
    menu: [
      {
        title: 'Buffallo chicken fries',
        contains: [
          'CRISPY CHICKEN',
          'BUFFALO SAUCE',
          'RANCH',
          'GREEN ONIONS',
        ],
      },
      {
        title: 'Carne asada fries',
        contains: [
          'CHEESE SAUCE',
          'PICO DE GALLO',
          'CARNE ASADA',
          'RANCH',
          'CILANTRO',
          'AVOCADO',
        ],
      },
      {
        title: 'Mediterranean fries',
        contains: [
          'LEMON AIOLI',
          'GRILL STEAK',
          'OLIVES',
          'BANANA PEPPERS',
          'FETA CHEESE',
        ],
      },
      {
        title: 'XD Fries',
        contains: [
          'CHEESE SAUCE',
          'PICO DE GALLO',
          'JALAPEÑOS',
          'RANCH',
          'ADD STEAK',
          'ADD CRISPY CHICKEN',
        ],
      },
    ],
  },
  {
    title: 'Sides',
    menu: [
      { title: 'Onion rings' },
      { title: 'Fries' },
    ],
  },
  {
    title: 'Deserts',
    menu: [
      { title: 'Churros' },
    ],
  },
  {
    title: 'Beverages',
    menu: [
      { title: 'Water' },
      { title: 'Coke' },
      { title: 'Diets Coke' },
      { title: 'Sprite' },
    ],
  },
]

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
