import App from "./App";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
import ShoppingCart from "./features/cart/routes/ShoppingCart";
import CheckoutSuccess from "./routes/CheckoutSuccess/CheckoutSuccess";

const routes = [
  {
    Component: App,
    children: [
      { index: true, Component: Home },
      {
        path: "shop",
        children: [
          { index: true, Component: Shop },
          { path: "cart", Component: ShoppingCart },
        ],
      },
    ],
  },
  {
    path: "checkout-success",
    Component: CheckoutSuccess,
  },
];

export default routes;
