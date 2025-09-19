import styles from "./ProductsGridItem.module.css"

import { Link } from "react-router"

import { Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import ItemCount from "../ItemCount/ItemCount"

import { useCart } from "../../hooks/useCart"
import type { Product } from "../../types"

import { useState } from "react"

interface ProductsGridItemProps {
  product: Product
}

export default function ProductsGridItem({ product }: ProductsGridItemProps) {
  const { handleAddToCart } = useCart()
  const { image, title, rating, price } = product

  const [itemQuantity, setItemQuantity] = useState(1)

  const handleQuantityChange = (value: number) => setItemQuantity(value)

  const onAddToCartClick = () => {
    handleAddToCart({ item: product, quantity: itemQuantity })

    setItemQuantity(1)
  }

  return (
    <div className={styles.product}>
      <div className={styles.productContainer}>
        <Link to={`/products/${product.id}`} className={styles.itemLink}>
          <div className={styles.imageBg}>
            <img className={styles.productImage} src={image} />
          </div>

          <div className={styles.productDetails}>
            <div className={styles.productHeading}>
              <h2 className={styles.productTitle}>{title}</h2>

              <div className={styles.productRating}>
                <p>{rating.rate}</p>
                <Star fill="yellow" size={20} />
              </div>
            </div>

            <p className={styles.productPrice}>${price.toFixed(2)}</p>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <ItemCount
            quantity={itemQuantity}
            setQuantity={handleQuantityChange}
          />

          <Button className="grow" onClick={onAddToCartClick} size="sm">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
