import App from "./App";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
import ShoppingCart from "./features/cart/routes/ShoppingCart";
import CheckoutSuccess from "./routes/CheckoutSuccess/CheckoutSuccess";
import Product from "./features/products/routes/Product/Product";

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
        loader: async ({ params }: { params: { productId: string } }) => {
          const { productId } = params;
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
