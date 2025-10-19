export interface PageCatalogParams {
    catalog_name: string
}

export interface IProduct {
    id: number
    name: string
    image: string
    price: number
    description: string
    categories: string
}