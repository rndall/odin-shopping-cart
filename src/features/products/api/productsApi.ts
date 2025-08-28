import { get } from "../../../api";

import type { Product } from "../types";

const API_URL = "https://fakestoreapi.com/products";

const getProducts = async (): Promise<Product[]> => {
  return await get(API_URL);
};

const getProduct = async (productId: string): Promise<Product> => {
  const url = `${API_URL}/${productId}`;
  return await get(url);
};

export { getProducts, getProduct };
