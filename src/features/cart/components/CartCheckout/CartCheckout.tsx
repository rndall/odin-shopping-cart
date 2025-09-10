import styles from "./CartCheckout.module.css";

import type { CartProps as CartCheckoutProps } from "../../types/props";

import CartTable from "../CartTable/CartTable";
import CheckoutFooter from "../CheckoutFooter/CheckoutFooter";

export default function CartCheckout(props: CartCheckoutProps) {
  const { cart, cartItemCount } = props;

  const cartTotal = cart
    .reduce((total, prev) => total + prev.item.price * prev.quantity, 0)
    .toFixed(2);

  return (
    <div>
      <h1 className={styles.heading}>
        {cartItemCount} {cartItemCount === 1 ? "Item" : "Items"} in your Cart
        for ${cartTotal}
      </h1>

      <CartTable {...props} />

      <CheckoutFooter subtotal={cartTotal} />
    </div>
  );
}
