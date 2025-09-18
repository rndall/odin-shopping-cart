import Container from "./container"
import { Link } from "react-router"
import { Button } from "./ui/button"

export default function Hero() {
  return (
    <section className="ms-auto grid items-center py-4 sm:grid-cols-[repeat(2,_1fr)] lg:max-w-[90%]">
      <Container className="relative z-10 flex flex-col space-y-6">
        <h1 className="text-center font-[Anton,_sans-serif] text-4xl uppercase sm:text-start sm:text-5xl/tight lg:text-8xl">
          Thanks for Escaping with us!
        </h1>

        <Link to="shop">
          <Button className="w-full lg:hidden">Shop the merch</Button>
          <Button className="hidden lg:block">Shop the merch</Button>
        </Link>
      </Container>

      <div className="relative">
        <div className="relative mt-12 sm:-left-1/4 sm:mt-0 sm:w-[125%] lg:-left-2/5 lg:w-[140%] 2xl:max-w-[1180px]">
          <div className="bg-primary py-[32%]">
            <img
              src="https://placecats.com/neo/600/900"
              className="absolute -top-[2%] left-[15%] z-20 max-w-[42%] -rotate-10 transition-all duration-600 sm:left-[24%]"
            />
            <img
              src="https://placecats.com/millie/400/600"
              className="absolute right-[15%] bottom-[8%] z-20 max-w-3/10 rotate-15 transition-all duration-600 sm:right-[8%]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
