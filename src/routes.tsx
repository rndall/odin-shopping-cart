import Root from "./routes/Root/Root"
import Home from "./routes/Home"
import Shop from "./routes/Shop"
import ShoppingCart from "./features/cart/routes/ShoppingCart"
import CheckoutSuccess from "./routes/CheckoutSuccess"
import Product from "./features/products/routes/Product"
import HydrateFallback from "./components/HydrateFallback"

import { shopLoader, productLoader } from "./api/loaders"

import queryClient from "./queryClient"

const routes = [
  {
    Component: Root,
    HydrateFallback,
    children: [
      { index: true, Component: Home },
      {
        path: "shop",
        children: [
          {
            index: true,
            Component: Shop,
            loader: shopLoader(queryClient),
            HydrateFallback,
          },
          { path: "cart", Component: ShoppingCart },
        ],
      },
      {
        path: "products/:productId",
        Component: Product,
        HydrateFallback,
        loader: productLoader(queryClient),
      },
    ],
  },
  {
    path: "checkout-success",
    Component: CheckoutSuccess,
  },
]

export default routes
