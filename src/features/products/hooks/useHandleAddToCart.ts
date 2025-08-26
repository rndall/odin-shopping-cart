import { useOutletContext } from "react-router";

import type { handleAddToCartFn } from "../types";

type ContextType = { handleAddToCart: handleAddToCartFn }

const useHandleAddToCart = () => useOutletContext<ContextType>()

export { useHandleAddToCart }
