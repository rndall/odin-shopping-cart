import type { Product } from "../types";

import { useEffect, useState } from "react";

const getProducts = async (): Promise<Product[]> => {
  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  return response.json();
};

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
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

  return { products, loading, error };
};

export { getProducts, useProducts };
