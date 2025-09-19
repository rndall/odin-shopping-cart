import { useNavigate, Link } from "react-router"

import { Button } from "@/components/ui/button"

import { useCart } from "@/features/products/hooks/useCart"
import { useState } from "react"

interface CheckoutFooterProps {
  subtotal: string
}

export default function CheckoutFooter({ subtotal }: CheckoutFooterProps) {
  const { handleClearCart } = useCart()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = async () => {
    setIsLoading(true)

    setTimeout(() => {
      handleClearCart()
      setIsLoading(false)
      navigate("/checkout-success")
    }, 2000)
  }

  return (
    <div className="flex flex-col justify-between gap-4.5 sm:flex-row">
      <div className="flex flex-col space-y-8 border-t border-black/10 pt-8 sm:order-1 sm:shrink sm:grow-0 sm:basis-80 sm:space-y-11 sm:pt-12.5">
        <div className="flex justify-between font-bold">
          <p>Subtotal</p>
          <p>${subtotal}</p>
        </div>

        <div>
          <Button
            onClick={handleCheckout}
            loading={isLoading}
            className="w-full"
          >
            Checkout
          </Button>
        </div>
      </div>

      <div className="sm:mt-auto sm:shrink sm:grow-0 sm:basis-80">
        <Button className="w-full" asChild variant="outline">
          <Link to="/shop">Back to Shopping</Link>
        </Button>
      </div>
    </div>
  )
}
