import { useCart } from "@/features/products/hooks/useCart"

import Container from "@/components/ui/container"
import CartCheckout from "../CartCheckout/CartCheckout"
import EmptyCart from "../EmptyCart"

export default function Cart() {
  const { cart } = useCart()

  return (
    <section className="mx-auto max-w-[1200px] py-4">
      <Container>
        {cart.length > 0 ? <CartCheckout /> : <EmptyCart />}
      </Container>
    </section>
  )
}
