import { render, screen } from "@testing-library/react";
import Cart from "./Cart";
import { useCart } from "../../../products/hooks/useCart";

vi.mock("../../../products/hooks/useCart", () => ({
  useCart: vi.fn(),
}));

vi.mock("../CartCheckout/CartCheckout", () => ({
  default: () => <div data-testid="checkout">Cart Checkout Component</div>,
}));

vi.mock("../EmptyCart/EmptyCart", () => ({
  default: () => (
    <div data-testid="empty-cart">Your Shopping Cart is Empty </div>
  ),
}));

describe("Cart Component", () => {
  test("renders EmptyCart component if cart is empty", () => {
    vi.mocked(useCart).mockReturnValue({
      cart: [],
      handleAdjustItemQuantity: () => {},
      handleRemoveItem: () => {},
      handleAddToCart: () => {},
      handleClearCart: () => {},
      cartItemCount: 0,
    });

    render(<Cart />);

    expect(screen.getByTestId("empty-cart")).toBeInTheDocument();
    expect(screen.queryByTestId("checkout")).not.toBeInTheDocument();
  });

  test("renders CartCheckOut component if cart isn't empty", () => {
    const cartWithItems = [
      {
        item: {
          id: 1,
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 109.95,
          description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
          rating: {
            rate: 3.9,
            count: 120,
          },
        },
        quantity: 2,
      },
      {
        item: {
          id: 2,
          title: "Mens Casual Premium Slim Fit T-Shirts ",
          price: 22.3,
          description:
            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
          category: "men's clothing",
          image:
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
          rating: {
            rate: 4.1,
            count: 259,
          },
        },
        quantity: 1,
      },
    ];
    vi.mocked(useCart).mockReturnValue({
      cart: cartWithItems,
      handleAdjustItemQuantity: () => {},
      handleRemoveItem: () => {},
      handleAddToCart: () => {},
      handleClearCart: () => {},
      cartItemCount: 0,
    });

    render(<Cart />);

    expect(screen.getByTestId("checkout")).toBeInTheDocument();
    expect(screen.queryByTestId("empty-cart")).not.toBeInTheDocument();
  });
});
