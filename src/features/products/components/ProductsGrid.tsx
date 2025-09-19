import ProductsGridItem from "./ProductsGridItem/ProductsGridItem"

import { productsQuery } from "../api/productsApi"
import { useSuspenseQuery } from "@tanstack/react-query"

export default function ProductsGrid() {
  const { data: products } = useSuspenseQuery(productsQuery())

  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(275px,_1fr))] justify-items-center gap-4 *:max-w-[335px] lg:grid-cols-3 lg:gap-y-14">
      {products.map((product) => (
        <ProductsGridItem key={product.id} product={product} />
      ))}
    </div>
  )
}
