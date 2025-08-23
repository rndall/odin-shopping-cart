import style from "./ProductsGridItem.module.css"

import { Star } from "lucide-react"

import Button from "../../../../components/ui/Button/Button"

export default function ProductsGridItem() {
  return (
    <div className={style.product}>
      <div className={style.productContainer}>
        <img src="https://placecats.com/300/400" />

        <div className={style.productDetails}>
          <div>
            <h2 className={style.productTitle}>NewJeans Album</h2>
            <p className={style.productPrice}>lorem ipsum</p>
          </div>

          <div className={style.productRating}>
            <p>4.2</p>
            <Star fill="yellow" />
          </div>
        </div>

        <Button size="sm" fullWidth>Add to Cart</Button>
      </div>
    </div>
  )
}

