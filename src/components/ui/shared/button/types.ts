import { ButtonHTMLAttributes } from "react";

export type ButtonRootVariant = 'product' | 'link'

export interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    classNames?: string
    variant?: ButtonRootVariant
    fullWidth?: boolean
}