import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRoutesStub } from "react-router";
import { useCart } from "../../hooks/useCart";
import ProductsGridItem from "./ProductsGridItem";

vi.mock("../../hooks/useCart.ts", () => ({ useCart: vi.fn() }));

const product = {
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
};

describe("ProductsGridItem component", () => {
  const Stub = createRoutesStub([
    {
      path: "/shop",
      Component: () => <ProductsGridItem product={product} />,
    },
  ]);

  test("renders product details", () => {
    const mockedUseCartReturn = {
      cart: [],
      handleAdjustItemQuantity: () => {},
      handleRemoveItem: () => {},
      handleAddToCart: () => {},
      handleClearCart: () => {},
      cartItemCount: 0,
    };
    vi.mocked(useCart).mockReturnValue(mockedUseCartReturn);

    const { container } = render(<Stub initialEntries={["/shop"]} />);

    expect(container).toMatchSnapshot();
  });

  test("call the handleAddToCart function when clicked", async () => {
    const handleAddToCart = vi.fn();
    const mockedUseCartReturn = {
      cart: [],
      handleAdjustItemQuantity: () => {},
      handleRemoveItem: () => {},
      handleAddToCart,
      handleClearCart: () => {},
      cartItemCount: 0,
    };
    const user = userEvent.setup();
    vi.mocked(useCart).mockReturnValue(mockedUseCartReturn);

    render(<Stub initialEntries={["/shop"]} />);

    const button = screen.getByRole("button", { name: /add to cart/i });

    await user.click(button);

    expect(handleAddToCart).toHaveBeenCalled();
  });
});
