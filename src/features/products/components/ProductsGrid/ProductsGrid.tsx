import styles from "./ProductsGrid.module.css"

import ProductsGridItem from "../ProductsGridItem/ProductsGridItem"

export default function ProductsGrid() {
  return (
    <div className={styles.grid}>
      <ProductsGridItem />
      <ProductsGridItem />
      <ProductsGridItem />
      <ProductsGridItem />
      <ProductsGridItem />
    </div>
  )
}

