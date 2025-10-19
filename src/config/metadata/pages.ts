export type PAGES_LIST = 
"bestsellery" |
"novinki" |
"face" |
"hair"


interface IPage {
    path: string,
    name: string
    description: string
}

export const PAGES_METADATA_CATALOG: Record<PAGES_LIST, IPage> = {
    bestsellery: {
        path: '/bestsellery',
        name: 'Бестселлеры',
        description: 'Бестселлеры'
    },
    "novinki": {
        path: '/novinki',
        name: 'Новинки',
        description: 'Новинки'
    },
    "face": {
        path: '/face',
        name: 'Лицо',
        description: 'Лицо'
    },
    "hair": {
        path: '/hair',
        name: 'Волосы',
        description: 'Волосы'
    }
}