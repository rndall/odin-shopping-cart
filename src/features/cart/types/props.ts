import type {
  CartItem,
  HandleAdjustItemQuantityFn,
  HandleRemoveItemFn,
} from ".";

interface CartProps {
  cart: CartItem[];
  cartItemCount: number;
  handleAdjustItemQuantity: HandleAdjustItemQuantityFn;
  handleRemoveItem: HandleRemoveItemFn;
}

export type { CartProps };
