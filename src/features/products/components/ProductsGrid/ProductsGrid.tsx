import styles from "./ProductsGrid.module.css";

import type { handleAddToCartFn } from "../../../cart/types";

import StatusHandler from "../../../../components/StatusHandler/StatusHandler";
import ProductsGridItem from "../ProductsGridItem/ProductsGridItem";

import { useProducts } from "../../api/productsApi";

export default function ProductsGrid({
  handleAddToCart,
}: {
  handleAddToCart: handleAddToCartFn;
}) {
  const { products, loading, error } = useProducts();

  if (loading || error)
    return <StatusHandler loading={loading} error={error ?? ""} />;

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductsGridItem
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}
