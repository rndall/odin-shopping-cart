import styles from "./CartCheckout.module.css";

import { useCart } from "../../../products/hooks/useCart";

import CartTable from "../CartTable/CartTable";
import CheckoutFooter from "../CheckoutFooter/CheckoutFooter";

export default function CartCheckout() {
  const { cart, cartItemCount } = useCart();

  const cartTotal = cart
    .reduce((total, prev) => total + prev.item.price * prev.quantity, 0)
    .toFixed(2);

  return (
    <div>
      <h1 className={styles.heading}>
        {cartItemCount} {cartItemCount === 1 ? "Item" : "Items"} in your Cart
        for ${cartTotal}
      </h1>

      <CartTable />

      <CheckoutFooter subtotal={cartTotal} />
    </div>
  );
}
