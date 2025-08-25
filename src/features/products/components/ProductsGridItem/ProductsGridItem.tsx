import style from "./ProductsGridItem.module.css"

import { Star } from "lucide-react"

import Button from "../../../../components/ui/Button/Button"

export default function ProductsGridItem() {
  return (
    <div className={style.product}>
      <div className={style.productContainer}>
        <img src="https://placecats.com/300/400" />

        <div className={style.productDetails}>
          <div className={style.productHeading}>
            <h2 className={style.productTitle}>NewJeans Album</h2>

            <div className={style.productRating}>
              <p>4.2</p>
              <Star fill="yellow" size={20} />
            </div>
          </div>

          <p className={style.productPrice}>lorem ipsum</p>
        </div>

        <div className={style.itemCount}>
          <Button size="xs" pill={false}>-</Button>
          <input type="number" defaultValue={1} />
          <Button size="xs" pill={false}>+</Button>
        </div>

        <Button size="sm" fullWidth>Add to Cart</Button>
      </div>
    </div>
  )
}

