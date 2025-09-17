import type { CartItem } from "../features/cart/types";

const get = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  return response.json();
};

const setCartLocalStorage = (cart: CartItem[]) => {
  const value = JSON.stringify(cart);

  localStorage.setItem("cart", value);
};

const getCartLocalStorage = (): CartItem[] | null => {
  const cartData = localStorage.getItem("cart");

  if (!cartData) return null;

  return JSON.parse(cartData);
};

export { get, setCartLocalStorage, getCartLocalStorage };
