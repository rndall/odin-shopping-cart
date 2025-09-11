import "./App.css";

import { Outlet, ScrollRestoration } from "react-router";

import Navbar from "./components/Navbar/Navbar";

import type { CartItem } from "./features/cart/types";

import { getCartLocalStorage, setCartLocalStorage } from "./api";

import { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState<CartItem[]>(getCartLocalStorage() || []);

  useEffect(() => setCartLocalStorage(cart), [cart]);

  const handleAddToCart = ({ item, quantity }: CartItem) => {
    const productIndex = cart.findIndex((ci) => ci.item.id === item.id);

    if (productIndex === -1) {
      setCart([...cart, { item, quantity }]);
      return;
    }

    const nextCart = [...cart];
    const existingItem = nextCart[productIndex];
    existingItem.quantity = existingItem.quantity += quantity;
    setCart(nextCart);
  };

  const handleAdjustItemQuantity = ({
    itemId,
    quantity,
  }: {
    itemId: number;
    quantity: number;
  }) => {
    const productIndex = cart.findIndex((ci) => ci.item.id === itemId);

    const nextCart = [...cart];
    const existingItem = nextCart[productIndex];
    existingItem.quantity = quantity;
    setCart(nextCart);
  };

  const handleRemoveItem = (itemId: number) => {
    const nextCart = cart.filter(({ item }) => item.id !== itemId);
    setCart(nextCart);
  };

  const cartItemCount = cart.reduce((total, prev) => total + prev.quantity, 0);

  return (
    <>
      <Navbar cartItemCount={cartItemCount} />

      <main className="main">
        <Outlet
          context={{
            handleAddToCart,
            handleAdjustItemQuantity,
            handleRemoveItem,
            cart,
            cartItemCount,
          }}
        />
        <ScrollRestoration
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          getKey={(location, _matches) => {
            return location.pathname;
          }}
        />
      </main>
    </>
  );
}

export default App;
