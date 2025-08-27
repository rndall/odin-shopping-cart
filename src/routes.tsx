import App from "./App";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
import ShoppingCart from "./routes/ShoppingCart";

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
];

export default routes;
