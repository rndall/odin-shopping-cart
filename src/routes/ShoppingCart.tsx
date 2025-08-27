import Cart from "../features/cart/components/Cart/Cart";

import { useCart } from "../features/products/hooks/useHandleAddToCart";

export default function ShoppingCart() {
  const { handleAddToCart, ...cart } = useCart();

  return <Cart {...cart} />;
}
