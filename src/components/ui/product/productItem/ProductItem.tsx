"use client"

import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import Button from '../../shared/button/Button'
import clsx from 'clsx'
import Link from 'next/link'
import { IProduct } from '@/types/product'

interface Props {
  product: IProduct
}

const ProductItem = ({
  product
}: Props) => {
  const [isHover, setIsHover] = useState({
    name: false,
    image: false
  })

  const nameRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const refName = nameRef.current
    const refImage = imageRef.current

    if (!refName || !refImage) return

    const funcMouseEnterName = () => setIsHover(prev => ({...prev, name: true, image: true}))
    const funcLeaveEnterName = () => setIsHover(prev => ({...prev, name: false, image: false}))
    const funcMouseEnterImage = () => setIsHover(prev => ({...prev, name: true, image: false}))
    const funcLeaveEnterImage = () => setIsHover(prev => ({...prev, name: false, image: false}))

    refName.addEventListener('mouseenter', funcMouseEnterName)
    refName.addEventListener('mouseleave', funcLeaveEnterName)

    refImage.addEventListener('mouseenter', funcMouseEnterImage)
    refImage.addEventListener('mouseleave', funcLeaveEnterImage)

    return () => {
      refName.removeEventListener('mouseenter', funcMouseEnterName)
      refName.removeEventListener('mouseleave', funcLeaveEnterName)

      refImage.removeEventListener('mouseenter', funcMouseEnterImage)
      refImage.removeEventListener('mouseleave', funcLeaveEnterImage)
    }
  }, [])

  return (
    <div className={styles.product}>
        <div className={styles.product_main}>
          <Link href={`/product/${product.slug}`} className={styles.product_image} target='_tablet'>
              <div ref={imageRef} className={clsx(
                styles.product_back,
                isHover.image && styles.product_back__hovered,
              )} />
              <Image
                  src={product.image}
                  alt={product.image}
                  fill
              />
          </Link>

          <div ref={nameRef} className={clsx(
            styles.product_name,
            isHover.name ? 'opacity-60' : 'opacity-100'
          )}>
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