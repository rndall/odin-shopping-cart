import { get } from "../../../api";

import type { Product } from "../types";

const API_URL = "https://fakestoreapi.com/products";

const getProducts = async (): Promise<Product[]> => {
  return await get(API_URL);
};

export { getProducts };
