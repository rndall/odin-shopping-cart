import styles from "./Button.module.css"

export default function Button({ fullWidth, children }: { fullWidth?: boolean, children: React.ReactNode }) {
  return (
    <button className={fullWidth ? styles.fullWidth : styles.btn}>{children}</button>
  )
}

