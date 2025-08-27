import type { Product } from "../../products/types";

interface CartItem {
  item: Product;
  quantity: number;
}

type HandleAddToCartFn = (item: CartItem) => void;

export type { CartItem, HandleAddToCartFn };
