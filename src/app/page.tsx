import ProductList from "@/components/ui/product/productList/ProductList";

export default async function Home () {
  const res = await fetch(`http://localhost:3000/api/catalog`, { cache: "no-store" });
  const data = await res.json()


  return (
    <div>
      <ProductList products={data}/>
    </div>
  )
}