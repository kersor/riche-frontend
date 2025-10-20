import ProductList from "@/components/ui/product/productList/ProductList";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND;

export default async function Home () {
  const res = await fetch(`${backendUrl}/products`, { cache: "no-store" });
  const data = await res.json()


  return (
    <div>
      <ProductList products={data}/>
    </div>
  )
}