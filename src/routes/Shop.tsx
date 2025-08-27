import ProductsCollection from "../features/products/components/ProductsCollection/ProductsCollection"

import { useCart } from "../features/products/hooks/useHandleAddToCart"

export default function Shop() {
  const { handleAddToCart } = useCart()

  return (
    <>
      <ProductsCollection handleAddToCart={handleAddToCart} />
    </>
  )
}
