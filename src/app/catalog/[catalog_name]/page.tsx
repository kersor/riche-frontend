import ProductList from '@/components/ui/product/productList/ProductList';
import { PageCatalogParams } from '@/types/catalog';
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({params}:{params: Promise<PageCatalogParams>}): Promise<Metadata> {
    const resParams = await params
    return {
        title: resParams.catalog_name
    }
}

export default async function CatalogName ({params}: {params: Promise<PageCatalogParams>}) {
    const param = await params
    const {catalog_name} = param
    const res = await fetch(`http://localhost:3000/api/catalog/${catalog_name}`, { cache: "no-store" });

    const data = await res.json()
    
    
    return (
        <ProductList products={data} />
    )
} 