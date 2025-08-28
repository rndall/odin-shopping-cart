import styles from "./CartTable.module.css";

import type { CartProps as CartTableProps } from "../../types/props";

import CartTableRow from "../CartTableRow/CartTableRow";

export default function CartTable(props: CartTableProps) {
  const { cart, handleAdjustItemQuantity, handleRemoveItem } = props;
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
          <CartTableRow
            key={item.id}
            item={item}
            quantity={quantity}
            handleAdjustItemQuantity={handleAdjustItemQuantity}
            handleRemoveItem={handleRemoveItem}
          />
        ))}
      </div>
    </div>
  );
}
