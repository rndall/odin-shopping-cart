import styles from "./Cart.module.css";

import { useCart } from "../../../products/hooks/useCart";

import CartCheckout from "../CartCheckout/CartCheckout";
import EmptyCart from "../EmptyCart/EmptyCart";

export default function Cart() {
  const { cart } = useCart();

  return (
    <section className={styles.section}>
      <div className={`container`}>
        {cart.length > 0 ? <CartCheckout /> : <EmptyCart />}
      </div>
    </section>
  );
}
