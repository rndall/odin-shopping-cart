import type { Product } from "../types";

const getProducts = async (url: string): Promise<Product[]> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  return response.json();
}

export { getProducts }
