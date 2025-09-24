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
    <div className="px-4 pb-4.5">
      <div className="hover:border-primary flex flex-col gap-5 border-b-2 border-black pb-9.5 transition">
        <Link to={`/products/${product.id}`} className="flex flex-col gap-5">
          <div className="bg-gray-200 p-12 transition-colors hover:bg-gray-200/80">
            <img className="h-100 object-contain" src={image} />
          </div>

          <div className="flex flex-col">
            <div className="grid grid-cols-[1fr_50px] justify-between gap-3">
              <h2 className="font-heading truncate text-xl uppercase">
                {title}
              </h2>

              <div className="flex items-center justify-end gap-1 text-sm">
                <p>{rating.rate}</p>
                <Star fill="yellow" size={20} />
              </div>
            </div>

            <p className="text-sm">${price.toFixed(2)}</p>
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
