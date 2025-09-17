import { get } from "../../../api";
import { queryOptions } from "@tanstack/react-query";

import type { Product } from "../types";

const API_URL = "https://fakestoreapi.com/products";

const getProducts = async () => {
  return await get<Product[]>(API_URL);
};

const getProduct = async (productId: string) => {
  const url = `${API_URL}/${productId}`;
  return await get<Product>(url);
};

const productsQuery = () =>
  queryOptions({
    queryKey: ["products", "list"],
    queryFn: getProducts,
  });

const productDetailQuery = (id: string) =>
  queryOptions({
    queryKey: ["product", "detail", id],
    queryFn: async () => {
      const product = await getProduct(id);

      if (!product) {
        throw new Response("", {
          status: 404,
          statusText: "Not Found",
        });
      }

      return product;
    },
  });

export { productsQuery, productDetailQuery };
