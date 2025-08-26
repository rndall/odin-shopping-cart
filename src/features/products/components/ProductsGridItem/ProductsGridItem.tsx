import style from "./ProductsGridItem.module.css"

import { Star } from "lucide-react"

import Button from "../../../../components/ui/Button/Button"
import ItemCount from "../ItemCount/ItemCount"

import type { Product } from "../../types"

import { useState } from "react"

export default function ProductsGridItem({ product }: { product: Product }) {
  const { image, title, rating, price } = product

  const [itemQuantity, setItemQuantity] = useState(1)

  const handleQuantityChange = (value: number) => setItemQuantity(value)

  const handleAddToCart = () => {
    // Put items in cart
    //

    setItemQuantity(1)
  }

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

        <ItemCount quantity={itemQuantity} setQuantity={handleQuantityChange} />

        <Button onClick={handleAddToCart} size="sm" fullWidth>Add to Cart</Button>
      </div>
    </div>
  )
}

