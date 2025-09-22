import { useCart } from "../hooks/useCart"
import { useLoaderData } from "react-router"

import { Star } from "lucide-react"

import type { Product } from "../types"
import type { ProductAccordionItems } from "../components/ProductAccordion/ProductAccordion"

import Container from "@/components/ui/container"
import ItemCount from "../components/ItemCount/ItemCount"
import { Button } from "@/components/ui/button"
import ProductAccordion from "../components/ProductAccordion/ProductAccordion"

import useIsVisible from "@/hooks/useIsVisible"
import { productLoader } from "@/api/loaders"

import { useRef, useState } from "react"
import { useSuspenseQuery } from "@tanstack/react-query"
import { productDetailQuery } from "../api/productsApi"

export default function Product() {
  const { handleAddToCart } = useCart()
  const { productId } = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof productLoader>>
  >
  const { data: product } = useSuspenseQuery(productDetailQuery(productId))
  const { image, title, price, rating, description } = product
  const [itemQuantity, setItemQuantity] = useState(1)

  const addToCartBtnRef = useRef<HTMLButtonElement>(null)

  const isAddToCardBtnVisible = useIsVisible(addToCartBtnRef)

  const productAccordionItems: ProductAccordionItems[] = [
    { trigger: "Description", content: description },
  ]

  const onAddToCartClick = () => {
    handleAddToCart({ item: product, quantity: itemQuantity })

    setItemQuantity(1)
  }

  return (
    <>
      <section className="py-6">
        <Container className="relative flex flex-col sm:flex-row sm:gap-14">
          <div className="flex aspect-[3_/_4] shrink grow items-center justify-center bg-gray-200 p-12 sm:basis-[55%] sm:self-start lg:max-w-[95%] xl:aspect-auto">
            <img className="h-100 object-contain" src={image} />
          </div>

          <div className="mt-8 shrink grow sm:basis-[45%]">
            <div className="flex flex-col gap-5">
              <h1 className="font-heading text-4xl uppercase">{title}</h1>

              <div className="flex items-center justify-between">
                <p className="text-lg">${price.toFixed(2)}</p>
                <div className="flex items-center gap-1">
                  <p>{rating.rate}</p>
                  <Star fill="yellow" size={20} />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-t-black/10 pt-8 lg:gap-12">
                <div className="mx-auto lg:mx-0">
                  <ItemCount
                    quantity={itemQuantity}
                    setQuantity={(value: number) => setItemQuantity(value)}
                  />
                </div>
                <Button
                  className="grow"
                  ref={addToCartBtnRef}
                  onClick={onAddToCartClick}
                >
                  Add to Cart
                </Button>
              </div>

              <div className="mt-5">
                <ProductAccordion items={productAccordionItems} />
              </div>
            </div>
          </div>
        </Container>

        <div
          className={`fixed bottom-0 min-w-full translate-y-0 p-4 transition-transform sm:hidden ${
            !isAddToCardBtnVisible ? "" : "translate-y-full"
          }`}
        >
          <Button className="w-full" onClick={onAddToCartClick}>
            Add to Cart
          </Button>
        </div>
      </section>
    </>
  )
}
