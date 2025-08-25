import styles from "./Button.module.css"

interface ButtonProps {
  fullWidth?: boolean;
  size?: "xs" | "sm" | "default";
  pill?: boolean;
  children?: React.ReactNode;
}

export default function Button({ fullWidth, size = "default", children, pill = true }: ButtonProps) {
  const buttonSize = size === "default" ? styles.btn : styles[size];
  const fullWidthClass = fullWidth ? styles.fullWidth : '';
  const pillClass = pill ? styles.pill : '';

  return (
    <button className={`${fullWidthClass} ${buttonSize} ${pillClass}`}> {children}</button >
  )
}

