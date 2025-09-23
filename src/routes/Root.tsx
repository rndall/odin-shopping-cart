import { Outlet, ScrollRestoration } from "react-router"

import Navbar from "../components/Navbar/Navbar"

import type { CartItem } from "../features/cart/types"
import type { ContextType } from "../types"

import { getCartLocalStorage, setCartLocalStorage } from "../api"

import { useEffect, useReducer } from "react"

type State = CartItem[]

const initialState: State = []

type CartAction =
  | { type: "added"; cartItem: CartItem }
  | {
      type: "adjusted"
      itemId: number
      quantity: number
    }
  | { type: "removed"; itemId: number }
  | { type: "cleared" }

function cartReducer(cart: State, action: CartAction) {
  switch (action.type) {
    case "added": {
      return [...cart, action.cartItem]
    }
    case "adjusted": {
      console.log(action)
      return cart.map((c) => {
        if (c.item.id === action.itemId) {
          return { ...c, quantity: action.quantity }
        } else {
          return c
        }
      })
    }
    case "removed": {
      return cart.filter((c) => c.item.id !== action.itemId)
    }
    case "cleared": {
      return initialState
    }
  }
}

function Root() {
  const [cart, dispatch] = useReducer(
    cartReducer,
    getCartLocalStorage() || initialState,
  )

  useEffect(() => setCartLocalStorage(cart), [cart])

  const handleAddToCart = (cartItem: CartItem) => {
    const product = cart.find((ci) => ci.item.id === cartItem.item.id)

    if (!product) {
      dispatch({ type: "added", cartItem })
      return
    }

    handleAdjustItemQuantity({
      itemId: cartItem.item.id,
      quantity: product.quantity + cartItem.quantity,
    })
  }

  const handleAdjustItemQuantity = ({
    itemId,
    quantity,
  }: {
    itemId: number
    quantity: number
  }) => dispatch({ type: "adjusted", itemId, quantity })

  const handleRemoveItem = (itemId: number) =>
    dispatch({ type: "removed", itemId })

  const handleClearCart = () => dispatch({ type: "cleared" })

  const cartItemCount = cart.reduce((total, prev) => total + prev.quantity, 0)

  return (
    <>
      <Navbar cartItemCount={cartItemCount} />

      <main className="mt-16 sm:mt-22">
        <Outlet
          context={
            {
              handleAddToCart,
              handleAdjustItemQuantity,
              handleRemoveItem,
              handleClearCart,
              cart,
              cartItemCount,
            } satisfies ContextType
          }
        />
        <ScrollRestoration
          getKey={(location) => {
            return location.pathname
          }}
        />
      </main>
    </>
  )
}

export default Root
