import { useOutletContext } from "react-router";

import type { HandleAddToCartFn } from "../../cart/types";
import type { CartProps } from "../../cart/types/props";

type ContextType = { handleAddToCart: HandleAddToCartFn } & CartProps;

const useCart = () => useOutletContext<ContextType>();

export { useCart };
