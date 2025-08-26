import ProductsCollection from "../features/products/components/ProductsCollection/ProductsCollection"

import { useHandleAddToCart } from "../features/products/hooks/useHandleAddToCart"

export default function Shop() {
  const { handleAddToCart } = useHandleAddToCart()

  return <>
    <ProductsCollection handleAddToCart={handleAddToCart} />
  </>
}
