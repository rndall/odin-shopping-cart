import type {
  HandleAddToCartFn,
  HandleClearCartFn,
} from "../features/cart/types";
import type { CartProps } from "../features/cart/types/props";

type ContextType = {
  handleAddToCart: HandleAddToCartFn;
  handleClearCart: HandleClearCartFn;
} & CartProps;

export type { ContextType };
