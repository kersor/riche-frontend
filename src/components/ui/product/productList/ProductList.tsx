import React from 'react'
import ProductItem from '../productItem/ProductItem'
import styles from './styles.module.css'
import { IProduct } from '@/types/product'

interface Props {
    products: IProduct[]
}

const ProductList = ({
    products
}: Props) => {
  return (
    <div className={styles.list_wrapper}>
        {
            products.map((product) => <ProductItem key={product.id} product={product} />)
        }
    </div>
  )
}

export default ProductList