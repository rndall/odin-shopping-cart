import style from "./ProductsGridItem.module.css"

import { Star } from "lucide-react"

import Button from "../../../../components/ui/Button/Button"
import ItemCount from "../ItemCount/ItemCount"

import type { Product, handleAddToCartFn } from "../../types"

import { useState } from "react"

interface ProductsGridItemProps {
  product: Product;
  handleAddToCart: handleAddToCartFn;
}

export default function ProductsGridItem({ product, handleAddToCart }: ProductsGridItemProps) {
  const { image, title, rating, price } = product

  const [itemQuantity, setItemQuantity] = useState(1)

  const handleQuantityChange = (value: number) => setItemQuantity(value)

  const onAddToCartClick = () => {
    handleAddToCart({ item: product, quantity: itemQuantity })

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

        <Button onClick={onAddToCartClick} size="sm" fullWidth>Add to Cart</Button>
      </div>
    </div>
  )
}

