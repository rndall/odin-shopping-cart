import { useOutletContext } from "react-router"

import type { handleAddToCartFn, CartItem } from "../../cart/types"

type ContextType = { handleAddToCart: handleAddToCartFn; cart: CartItem[] }

const useCart = () => useOutletContext<ContextType>()

export { useCart }
