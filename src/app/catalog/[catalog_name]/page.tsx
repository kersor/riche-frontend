import ProductList from '@/components/ui/product/productList/ProductList';
import { PAGES_LIST, PAGES_METADATA_CATALOG } from '@/config/metadata/pages';
import { fetchProducts } from '@/lib/getProducts';
import { PageCatalogParams } from '@/types/catalog';
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata(
  {params}: {params: Promise<PageCatalogParams>}
): Promise<Metadata> {
  const resParams = await params
  const page = resParams.catalog_name as unknown as PAGES_LIST
  const dta = PAGES_METADATA_CATALOG[page]

  return {
    title: dta.name,
    description: dta.description,
  }
}

export default async function CatalogName ({params}: {params: Promise<PageCatalogParams>}) {
    const param = await params
    const {catalog_name} = param
    const data = await fetchProducts(catalog_name)

    return (
        <ProductList products={data} />
    )
} 