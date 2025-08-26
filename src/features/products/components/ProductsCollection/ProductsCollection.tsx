
import style from "./ProductsCollection.module.css"

import ProductsGrid from "../ProductsGrid/ProductsGrid"

import type { handleAddToCartFn } from "../../types"

export default function ProductsCollection({ handleAddToCart }: { handleAddToCart: handleAddToCartFn }) {
  return (
    <section className={style.collection}>
      <div className={`${style.collectionContainer} container`}>
        <h1 className={style.heading}>All Products</h1>

        <ProductsGrid handleAddToCart={handleAddToCart} />
      </div>
    </section>
  )
}

