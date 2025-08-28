import Cart from "../components/Cart/Cart";

import { useCart } from "../../products/hooks/useHandleAddToCart";

export default function ShoppingCart() {
  const { handleAddToCart, ...cart } = useCart();

  return <Cart {...cart} />;
}
