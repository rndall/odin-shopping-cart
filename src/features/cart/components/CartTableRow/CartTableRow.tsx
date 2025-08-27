import styles from "./CartTableRow.module.css";

import type { Product } from "../../../products/types";
import type {
  HandleAdjustItemQuantityFn,
  HandleRemoveItemFn,
} from "../../types";

import ItemCount from "../../../products/components/ItemCount/ItemCount";

import { X } from "lucide-react";

interface CartTableRowProps {
  item: Product;
  quantity: number;
  handleAdjustItemQuantity: HandleAdjustItemQuantityFn;
  handleRemoveItem: HandleRemoveItemFn;
}

export default function CartTableRow({
  item,
  quantity,
  handleAdjustItemQuantity,
  handleRemoveItem,
}: CartTableRowProps) {
  const handleQuantityChange = (value: number) => {
    handleAdjustItemQuantity({ itemId: item.id, quantity: value });
  };

  return (
    <div className={styles.tableData} key={item.id}>
      <div className={styles.productDetails}>
        <img className={styles.productImage} src={item.image} />
        <h2 className={styles.productTitle}>{item.title}</h2>
      </div>

      <div className={styles.productCount}>
        <ItemCount quantity={quantity} setQuantity={handleQuantityChange} />
      </div>

      <div>${(item.price * quantity).toFixed(2)}</div>

      <button
        className={styles.productRemove}
        onClick={() => handleRemoveItem(item.id)}
      >
        <X />
      </button>
    </div>
  );
}
