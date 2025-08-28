import styles from "./CartCheckOut.module.css";

import type { CartProps as CartCheckOutProps } from "../../types/props";

import CartTable from "../CartTable/CartTable";
import CheckOutFooter from "../CheckOutFooter/CheckOutFooter";

export default function CartCheckOut(props: CartCheckOutProps) {
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

      <CheckOutFooter />
    </div>
  );
}
