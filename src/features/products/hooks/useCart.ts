import { useOutletContext } from "react-router";

import type { ContextType } from "../../../types";

const useCart = () => useOutletContext<ContextType>();

export { useCart };
