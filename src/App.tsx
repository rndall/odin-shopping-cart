import "./App.css"

import { Outlet } from "react-router"

import Navbar from "./components/Navbar/Navbar"

import type { CartItem } from "./features/cart/types"

import { useState } from "react"

function App() {
  const [cart, setCart] = useState<CartItem[]>([])

  const handleAddToCart = ({ item, quantity }: CartItem) => {
    const productIndex = cart.findIndex((ci) => ci.item.id === item.id)

    if (productIndex === -1) {
      setCart([...cart, { item, quantity }])
      return
    }

    const nextCart = [...cart]
    const existingItem = nextCart[productIndex]
    existingItem.quantity = existingItem.quantity += quantity
    setCart(nextCart)
  }

  const cartItemCount = cart.reduce((total, prev) => total + prev.quantity, 0)

  return (
    <>
      <Navbar cartItemCount={cartItemCount} />

      <main className="main">
        <Outlet context={{ handleAddToCart, cart }} />
      </main>
    </>
  )
}

export default App
