import styles from "./ProductsGrid.module.css";

import ProductsGridItem from "../ProductsGridItem/ProductsGridItem";

import { productsQuery } from "../../api/productsApi";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function ProductsGrid() {
  const { data: products } = useSuspenseQuery(productsQuery());

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductsGridItem key={product.id} product={product} />
      ))}
    </div>
  );
}
