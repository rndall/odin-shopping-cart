import styles from "./CartTableRow.module.css";

import type { Product } from "../../../products/types";
import { useCart } from "../../../products/hooks/useCart";

import ItemCount from "../../../products/components/ItemCount/ItemCount";

import { X } from "lucide-react";
import { Link } from "react-router";

interface CartTableRowProps {
  item: Product;
  quantity: number;
}

export default function CartTableRow({ item, quantity }: CartTableRowProps) {
  const { handleAdjustItemQuantity, handleRemoveItem } = useCart();
  const handleQuantityChange = (value: number) => {
    handleAdjustItemQuantity({ itemId: item.id, quantity: value });
  };

  return (
    <div className={styles.tableData} key={item.id}>
      <Link to={`/products/${item.id}`}>
        <div className={styles.productImageContainer}>
          <img className={styles.productImage} src={item.image} />
        </div>
      </Link>

      <div className={styles.productDetails}>
        <div className={styles.titleContainer}>
          <Link to={`/products/${item.id}`}>
            <h2 className={styles.productTitle}>{item.title}</h2>
          </Link>
        </div>

        <div className={styles.productPrice}>${item.price.toFixed(2)}</div>

        <div className={styles.productCount}>
          <ItemCount
            quantity={quantity}
            setQuantity={handleQuantityChange}
            inputOnlySm
          />
        </div>
      </div>

      <button
        className={styles.productRemove}
        onClick={() => handleRemoveItem(item.id)}
      >
        <X />
      </button>
    </div>
  );
}
