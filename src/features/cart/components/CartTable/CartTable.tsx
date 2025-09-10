import styles from "./CartTable.module.css";

import { useCart } from "../../../products/hooks/useCart";

import CartTableRow from "../CartTableRow/CartTableRow";

export default function CartTable() {
  const { cart } = useCart();
  const tableHeaders = ["Item", "Quantity", "Price", ""];

  return (
    <div className={styles.table}>
      <div className={styles.tableHeaders}>
        {tableHeaders.map((th, i) => (
          <div className={i === 0 ? styles.headerXs : ""} key={th}>
            {th}
          </div>
        ))}
      </div>

      <div className={styles.tableBody}>
        {cart.map(({ item, quantity }) => (
          <CartTableRow key={item.id} item={item} quantity={quantity} />
        ))}
      </div>
    </div>
  );
}
