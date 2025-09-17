import type { QueryClient } from "@tanstack/react-query";
import type { LoaderFunctionArgs } from "react-router";

import {
  productsQuery,
  productDetailQuery,
} from "../features/products/api/productsApi";

const shopLoader = (queryClient: QueryClient) => async () => {
  await queryClient.ensureQueryData(productsQuery());
};

const productLoader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    const { productId } = params;

    if (!productId) throw new Error("No product ID provided");

    await queryClient.ensureQueryData(productDetailQuery(productId));
    return { productId };
  };

export { shopLoader, productLoader };
