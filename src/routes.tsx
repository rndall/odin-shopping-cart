import type { LoaderFunctionArgs } from "react-router";

import App from "./App";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
import ShoppingCart from "./features/cart/routes/ShoppingCart";
import CheckoutSuccess from "./routes/CheckoutSuccess/CheckoutSuccess";
import Product from "./features/products/routes/Product/Product";
import HydrateFallback from "./components/HydrateFallback";

import { getProducts, getProduct } from "./features/products/api/productsApi";

const routes = [
  {
    Component: App,
    children: [
      { index: true, Component: Home },
      {
        path: "shop",
        children: [
          {
            index: true,
            Component: Shop,
            HydrateFallback,
            loader: async () => {
              return await getProducts();
            },
          },
          { path: "cart", Component: ShoppingCart },
        ],
      },
      {
        path: "products/:productId",
        Component: Product,
        HydrateFallback,
        loader: async ({ params }: LoaderFunctionArgs) => {
          const { productId } = params;

          if (!productId) return;

          return await getProduct(productId);
        },
      },
    ],
  },
  {
    path: "checkout-success",
    Component: CheckoutSuccess,
  },
];

export default routes;
