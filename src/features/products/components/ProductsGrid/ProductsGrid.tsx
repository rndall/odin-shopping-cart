import styles from "./ProductsGrid.module.css";

import { useLoaderData } from "react-router";

import type { Product } from "../../types";

import ProductsGridItem from "../ProductsGridItem/ProductsGridItem";

export default function ProductsGrid() {
  const products = useLoaderData<Product[]>();

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductsGridItem key={product.id} product={product} />
      ))}
    </div>
  );
}
