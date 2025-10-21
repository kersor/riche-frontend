import ProductList from "@/components/ui/product/productList/ProductList";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND;

export default async function Home () {
  const res = await fetch(`${backendUrl}/products`);
  const data = await res.json()

  if (!data) return null

  return (
    <div>
      <ProductList products={data}/>
    </div>
  )
}