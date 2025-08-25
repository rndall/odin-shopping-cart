import style from "./ProductsGridItem.module.css"

import { Star } from "lucide-react"

import Button from "../../../../components/ui/Button/Button"

import type { Product } from "../../types"

export default function ProductsGridItem({ product }: { product: Product }) {
  const { image, title, rating, price } = product

  return (
    <div className={style.product}>
      <div className={style.productContainer}>
        <div className={style.imageBg}>
          <img className={style.productImage} src={image} />
        </div>

        <div className={style.productDetails}>
          <div className={style.productHeading}>
            <h2 className={style.productTitle}>{title}</h2>

            <div className={style.productRating}>
              <p>{rating.rate}</p>
              <Star fill="yellow" size={20} />
            </div>
          </div>

          <p className={style.productPrice}>${price}</p>
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

