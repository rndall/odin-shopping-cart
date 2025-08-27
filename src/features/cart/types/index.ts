import type { Product } from "../../products/types"

interface CartItem {
  item: Product
  quantity: number
}

type handleAddToCartFn = (item: CartItem) => void

export type { CartItem, handleAddToCartFn }
