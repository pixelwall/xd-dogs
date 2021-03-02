export interface Entry {
  title?: string
  price?: number
  contains?: string[]
}

export interface MenuType {
  title: string
  menu: Entry[]
}

export interface MenuModel {
  slug?: string
  title?: string
  entries?: Entry[]
}

export const menu: MenuType[] = [
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

export const slugify = (...args: (string | number)[]) => {
  const value = args.join(' ')

  return value
    .normalize('NFD') // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, '') // remove all chars not letters, numbers and spaces (to be replaced)
    .replace(/\s+/g, '-') // separator
}

export const entries = ((menu: MenuType[]) => {
  const map = new Map<string, MenuType>()
  menu.forEach((m) => map.set(slugify(m.title), m))
  return map
})(menu)
