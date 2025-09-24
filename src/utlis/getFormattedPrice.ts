import type { Product } from "@/features/products/types"

export function getFormattedPrice(item: Product) {
  const price = item.price

  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price)

  return formatted
}
