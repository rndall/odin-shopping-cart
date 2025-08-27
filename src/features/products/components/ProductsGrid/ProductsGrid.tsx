import styles from "./ProductsGrid.module.css";

import { useEffect, useState } from "react";

import { getProducts } from "../../api/productsApi";

import type { Product } from "../../types";
import type { handleAddToCartFn } from "../../../cart/types";

import StatusHandler from "../../../../components/StatusHandler/StatusHandler";
import ProductsGridItem from "../ProductsGridItem/ProductsGridItem";

export default function ProductsGrid({
  handleAddToCart,
}: {
  handleAddToCart: handleAddToCartFn;
}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts("https://fakestoreapi.com/products");
        setProducts(data);
        setError(null);
      } catch (err) {
        if (!(err instanceof Error)) return;
        setError(err.message);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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
