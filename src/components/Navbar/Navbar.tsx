import { NavLink, useLocation } from "react-router"

import { ShoppingCart } from "lucide-react"

const navLinks = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Shop",
    route: "shop",
  },
]

interface NavbarProps {
  cartItemCount: number
}

export default function Navbar({ cartItemCount }: NavbarProps) {
  const location = useLocation()

  const showShoppingCartIcon = () => {
    const { pathname } = location
    return pathname.includes("shop") || pathname.includes("products")
  }

  return (
    <header className="bg-background fixed top-0 z-10 w-full py-5 sm:py-8">
      <div className="relative mx-auto flex items-center justify-center 2xl:max-w-[96rem]">
        <nav>
          <ul className="flex justify-center space-x-4">
            {navLinks.map(({ name, route }, index) => (
              <li key={index}>
                <NavLink
                  preventScrollReset
                  to={route}
                  className="hover:text-foreground-hover"
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        {showShoppingCartIcon() && (
          <NavLink
            preventScrollReset
            to="shop/cart"
            className="hover:text-foreground-hover absolute right-1/14"
          >
            <div className="relative">
              <ShoppingCart size={20} />
              {cartItemCount > 0 && (
                <div className="bg-primary absolute -top-[38%] left-4/5 flex h-4 min-w-4 items-center justify-center rounded-full px-0.75 py-0.5 font-bold text-white">
                  <p className="text-xs">{cartItemCount}</p>
                </div>
              )}
            </div>
          </NavLink>
        )}
      </div>
    </header>
  )
}
