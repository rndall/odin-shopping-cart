import styles from "./Cart.module.css";

import type { CartProps } from "../../types/props";

import CartCheckout from "../CartCheckout/CartCheckout";
import EmptyCart from "../EmptyCart/EmptyCart";

export default function Cart(props: CartProps) {
  const { cart } = props;

  return (
    <section className={styles.section}>
      <div className={`container`}>
        {cart.length > 0 ? <CartCheckout {...props} /> : <EmptyCart />}
      </div>
    </section>
  );
}
