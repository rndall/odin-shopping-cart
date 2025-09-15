import App from "./App";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
import ShoppingCart from "./features/cart/routes/ShoppingCart";
import CheckoutSuccess from "./routes/CheckoutSuccess/CheckoutSuccess";
import Product from "./features/products/routes/Product/Product";
import HydrateFallback from "./components/HydrateFallback";

import { shopLoader, productLoader } from "./api/loaders";

const routes = [
  {
    Component: App,
    HydrateFallback,
    children: [
      { index: true, Component: Home },
      {
        path: "shop",
        children: [
          {
            index: true,
            Component: Shop,
            loader: shopLoader,
          },
          { path: "cart", Component: ShoppingCart },
        ],
      },
      {
        path: "products/:productId",
        Component: Product,
        loader: productLoader,
      },
    ],
  },
  {
    path: "checkout-success",
    Component: CheckoutSuccess,
  },
];

export default routes;
