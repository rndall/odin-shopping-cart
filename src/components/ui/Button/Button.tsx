import styles from "./Button.module.css";

import { LoaderCircle } from "lucide-react";

interface ButtonProps {
  fullWidth?: boolean;
  variant?: "outlined" | "default";
  size?: "xs" | "sm" | "default" | "lg";
  pill?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function Button({
  fullWidth,
  variant = "default",
  size = "default",
  children,
  pill = true,
  isLoading,
  onClick,
}: ButtonProps) {
  const buttonSize = size === "default" ? styles.btn : styles[size];
  const fullWidthClass = fullWidth ? styles.fullWidth : "";
  const pillClass = pill ? styles.pill : "";
  const variantClass = variant === "default" ? "" : styles[variant];

  return (
    <button
      className={`${fullWidthClass} ${buttonSize} ${pillClass} ${variantClass}`}
      onClick={onClick}
    >
      {isLoading ? <LoaderCircle className={styles.loader} /> : children}
    </button>
  );
}
