import Cart from "../features/cart/components/Cart/Cart"

import { useCart } from "../features/products/hooks/useHandleAddToCart"

export default function ShoppingCart() {
  const { cart } = useCart()

  return <Cart cart={cart} />
}
