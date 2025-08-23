import styles from "./Button.module.css"

interface ButtonProps {
  fullWidth?: boolean;
  size?: "sm" | "default";
  children: React.ReactNode
}

export default function Button({ fullWidth, size = "default", children }: ButtonProps) {
  const buttonSize = size === "sm" ? styles.sm : styles.btn;

  return (
    <button className={`${fullWidth && styles.fullWidth} ${buttonSize}`}> {children}</button >
  )
}

