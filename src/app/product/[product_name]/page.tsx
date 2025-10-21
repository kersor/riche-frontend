import { IProduct, PageProductParams } from "@/types/product";
import Image from "next/image";
import styles from './styles.module.css'
import Button from "@/components/ui/shared/button/Button";
import { notFound } from "next/navigation";
import FullDescription from "@/components/pages/product/slug/fullDescription/FullDescription";
import Characteristics from "@/components/pages/product/slug/characteristics/Characteristics";
import { Metadata } from "next";
import { fetchProduct } from "@/lib/getProducts";


export async function generateMetadata(
  {params}: {params: Promise<PageProductParams>}
): Promise<Metadata> {
  const resParams = await params
  const product_name = resParams.product_name 

  const data = await fetchProduct(product_name)

    if (!data) {
        return {
            title: "Товар не найден",
            description: "Информация о товаре недоступна",
        };
    }


  return {
    title: data.name,
    description: data.description,
  }
}

export default async function Page ({params}: {params: Promise<PageProductParams>}) {
    const resParams = await params
    const {product_name} = resParams

    const product = await fetchProduct(product_name)
    if (!product) return null

    return (
        <div className={styles.product}>
            <div className={styles.product_info}>
                <h1 className={styles.product_title}>{product.name}</h1>
                <div className={styles.product_price}>{product.price} ₽</div>
                <div>
                    <Button fullWidth={false}>В корзину</Button>
                </div>

                <FullDescription fullDescription={product.fullDescription} />
                <Characteristics characteristics={product.characteristics} />
            </div>

            <div className="w-full max-w-[700px]">
                <div className={styles.product_image}>
                    <Image 
                        src={product.image}
                        alt={product.image}
                        fill
                    />
                </div>
            </div>
        </div>
    )
}