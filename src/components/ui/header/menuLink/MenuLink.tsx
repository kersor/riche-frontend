import Link, { LinkProps } from 'next/link'
import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

interface Props extends LinkProps {
    classNames?: string
    title: string
}

const MenuLink = ({
    classNames,
    href,
    title,
    ...otherProps
}: Props) => {

  return (
    <Link 
        className={clsx(
            styles.link,
            classNames
        )}
        href={href}
        {...otherProps}
    >
        {title}
    </Link>
  )
}

export default MenuLink