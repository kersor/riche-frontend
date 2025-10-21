import ProductList from "@/components/ui/product/productList/ProductList";
import { IProduct } from "@/types/product";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND;

export default async function Home () {
  let data: IProduct[] = []
  try {
    if (backendUrl) {
      const res = await fetch(`${backendUrl}/products`);

      if (res.ok) {
        const req = await res.json();
        data = Array.isArray(req) ? req : [];
      } else {
        console.warn("Failed to fetch products, status:", res.status);
      }
    } else {
      console.warn("NEXT_PUBLIC_BACKEND is not defined");
    }
  } catch (err) {
    console.error("Error fetching products:", err);
  }

  return (
    <div>
      <ProductList products={data}/>
    </div>
  )
}