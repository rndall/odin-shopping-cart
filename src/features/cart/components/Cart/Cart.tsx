import styles from "./Cart.module.css"

import EmptyCart from "../EmptyCart/EmptyCart"

import type { CartItem } from "../../types"

interface CartProps {
  cart: CartItem[]
}

export default function Cart({ cart }: CartProps) {
  return (
    <section className={styles.section}>
      <div className={`container`}>
        {cart.length > 0 ? <>Test</> : <EmptyCart />}
      </div>
    </section>
  )
}
