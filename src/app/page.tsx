import ProductList from "@/components/ui/product/productList/ProductList";

export default async function Home () {
  const res = await fetch(`http://localhost:8080/api/products`, { cache: "no-store" });
  const data = await res.json()


  return (
    <div>
      <ProductList products={data}/>
    </div>
  )
}