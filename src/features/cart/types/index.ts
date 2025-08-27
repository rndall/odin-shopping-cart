import type { Product } from "../../products/types";

interface CartItem {
  item: Product;
  quantity: number;
}

type HandleAddToCartFn = (item: CartItem) => void;
type HandleAdjustItemQuantityFn = ({
  itemId,
  quantity,
}: {
  itemId: number;
  quantity: number;
}) => void;
type HandleRemoveItemFn = (itemId: number) => void;

export type {
  CartItem,
  HandleAddToCartFn,
  HandleAdjustItemQuantityFn,
  HandleRemoveItemFn,
};
