import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import Button from '../../shared/button/Button'
import { IProduct } from '@/types/catalog'

interface Props {
  product: IProduct
}

const ProductItem = ({
  product
}: Props) => {
  return (
    <div className={styles.product}>
        <div className={styles.product_main}>
          <div className={styles.product_image}>
              <Image
                  src={product.image}
                  alt={product.image}
                  fill
              />
          </div>

          <div className={styles.product_name}>
            {product.name}
          </div>

          <div className={styles.product_description}>
            {product.description}
          </div>

          <div className={styles.product_price}>
            {product.price} ₽
          </div>
        </div>
        
        <div>
          <Button variant="product">В корзину</Button>
        </div>
    </div>
  )
}

export default React.memo(ProductItem)