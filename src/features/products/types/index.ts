interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}

interface CartItem {
  item: Product;
  quantity: number;
}

type handleAddToCartFn = (item: CartItem) => void

export type { Product, CartItem, handleAddToCartFn }
