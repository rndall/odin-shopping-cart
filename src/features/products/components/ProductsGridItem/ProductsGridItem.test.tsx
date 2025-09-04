import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRoutesStub } from "react-router";
import ProductsGridItem from "./ProductsGridItem";

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
  test("renders product details", () => {
    const Stub = createRoutesStub([
      {
        path: "/shop",
        Component: () => (
          <ProductsGridItem product={product} handleAddToCart={() => {}} />
        ),
      },
    ]);
    const { container } = render(<Stub initialEntries={["/shop"]} />);

    expect(container).toMatchSnapshot();
  });

  test("call the handleAddToCart function when clicked", async () => {
    const handleAddToCart = vi.fn();
    const user = userEvent.setup();
    const Stub = createRoutesStub([
      {
        path: "/shop",
        Component: () => (
          <ProductsGridItem
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ),
      },
    ]);

    render(<Stub initialEntries={["/shop"]} />);

    const button = screen.getByRole("button", { name: /add to cart/i });

    await user.click(button);

    expect(handleAddToCart).toHaveBeenCalled();
  });
});
