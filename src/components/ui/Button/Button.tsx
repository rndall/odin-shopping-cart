import styles from "./Button.module.css"

import type { ButtonHTMLAttributes, Ref } from "react"

import Loader from "../loader"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean
  variant?: "outlined" | "default"
  size?: "xs" | "sm" | "default" | "lg"
  pill?: boolean
  isLoading?: boolean
  children?: React.ReactNode
  ref?: Ref<HTMLButtonElement>
}

export default function Button({
  fullWidth,
  variant = "default",
  size = "default",
  children,
  pill = true,
  isLoading,
  ...rest
}: ButtonProps) {
  const buttonSize = size === "default" ? styles.btn : styles[size]
  const fullWidthClass = fullWidth ? styles.fullWidth : ""
  const pillClass = pill ? styles.pill : ""
  const variantClass = variant === "default" ? "" : styles[variant]

  return (
    <button
      {...rest}
      className={`${fullWidthClass} ${buttonSize} ${pillClass} ${variantClass}`}
    >
      {isLoading ? <Loader /> : children}
    </button>
  )
}
