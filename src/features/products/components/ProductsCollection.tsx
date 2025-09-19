import Container from "@/components/ui/container"
import ProductsGrid from "./ProductsGrid/ProductsGrid"

export default function ProductsCollection() {
  return (
    <section className="py-5">
      <Container className="flex flex-col gap-8">
        <h1 className="font-heading text-center text-4xl uppercase">
          All Products
        </h1>

        <ProductsGrid />
      </Container>
    </section>
  )
}
