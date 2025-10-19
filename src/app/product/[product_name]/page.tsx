import { IProduct, PageProductParams } from "@/types/product";
import Image from "next/image";
import styles from './styles.module.css'
import Button from "@/components/ui/shared/button/Button";
import { notFound } from "next/navigation";
import FullDescription from "@/components/pages/product/slug/fullDescription/FullDescription";
import Characteristics from "@/components/pages/product/slug/characteristics/Characteristics";

export default async function Page ({params}: {params: Promise<PageProductParams>}) {
    const resParams = await params
    const {product_name} = resParams

    const res = await fetch(`http://localhost:3000/api/product/${product_name}`)
    const product: IProduct = await res.json()

    

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