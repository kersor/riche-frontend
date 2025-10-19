import React, { ButtonHTMLAttributes } from 'react'
import styles from './styles.module.css'
import clsx from 'clsx'
import { ButtonRootProps } from './types'

const Button = ({
    className,
    children,
    onClick,
    variant = 'product',
    fullWidth = true,
    ...otherProps
}: ButtonRootProps) => {
  return (
    <button
        onClick={onClick}
        className={clsx(
            className,
            styles.button,
            styles[variant],
            fullWidth ? styles.fullWidth : ""
        )}
        {...otherProps}
    >
        <div className={styles.button_text}>{children}</div>
    </button>
  )
}

export default Button