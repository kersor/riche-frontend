import Product from "@/components/ui/product/productItem/ProductItem";
import styles from './styles.module.css'
import { Metadata } from "next";
import { PageCatalogParams } from "@/types/catalog";
import ProductList from "@/components/ui/product/productList/ProductList";
import Image from "next/image";


export default async function Home () {
  const res = await fetch(`http://localhost:3000/api/catalog`, { cache: "no-store" });
  const data = await res.json()


  return (
    <div>
      <ProductList products={data}/>
    </div>
  )
}