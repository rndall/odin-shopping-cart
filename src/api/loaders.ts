import type { LoaderFunctionArgs } from "react-router";

import { getProduct, getProducts } from "../features/products/api/productsApi";

async function shopLoader() {
  return await getProducts();
}

async function productLoader({ params }: LoaderFunctionArgs) {
  const { productId } = params as { productId: string };
  return await getProduct(productId);
}

export { shopLoader, productLoader };
