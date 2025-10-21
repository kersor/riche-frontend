import ProductList from "@/components/ui/product/productList/ProductList";
import { fetchProducts } from "@/lib/getProducts";
import { IProduct } from "@/types/product";


export default async function Home () {
  const data = await fetchProducts()

  return (
    <div>
      <ProductList products={data}/>
    </div>
  )
}