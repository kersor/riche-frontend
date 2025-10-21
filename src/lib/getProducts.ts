// lib/getProducts.ts
import { IProduct } from "@/types/product";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND;


const fetchProducts = async (category = ""): Promise<IProduct[]> => {
  if (!backendUrl) return [];

  try {
    const res = await fetch(`${backendUrl}/products/${category}`);
    if (!res.ok) return [];

    const data = await res.json();

    return data;
  } catch (err) {
    console.error("Failed to fetch products:", err);
    return [];
  }
};

const fetchProduct = async (name: string): Promise<IProduct | null> => {
  if (!backendUrl) return null;

  try {
    const res = await fetch(`${backendUrl}/products/p/${name}`);
    if (!res.ok) return null;

    const data = await res.json();

    return data;
  } catch (err) {
    console.error("Failed to fetch products:", err);
    return null;
  }
};



export {
  fetchProducts,
  fetchProduct
}