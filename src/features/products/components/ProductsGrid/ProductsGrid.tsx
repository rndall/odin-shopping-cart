import styles from "./ProductsGrid.module.css";

import { useLoaderData } from "react-router";

import type { Product } from "../../types";
import type { HandleAddToCartFn } from "../../../cart/types";

import ProductsGridItem from "../ProductsGridItem/ProductsGridItem";

export default function ProductsGrid({
  handleAddToCart,
}: {
  handleAddToCart: HandleAddToCartFn;
}) {
  const products = useLoaderData<Product[]>();

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
