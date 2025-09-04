import { render, screen } from "@testing-library/react";
import { createRoutesStub } from "react-router";
import Navbar from "./Navbar";

vi.mock("lucide-react", () => ({
  ShoppingCart: () => <svg data-testid="shopping-cart-icon" />,
}));

describe("Navbar component", () => {
  const navbar = <Navbar cartItemCount={0} />;

  test("render navLinks", () => {
    const Stub = createRoutesStub([
      {
        index: true,
        Component: () => navbar,
      },
    ]);

    const { container } = render(<Stub />);

    expect(container).toMatchSnapshot();
  });

  test("render ShoppingCart icon on /shop", () => {
    const Stub = createRoutesStub([
      {
        path: "/shop",
        Component: () => navbar,
      },
    ]);

    render(<Stub initialEntries={["/shop"]} />);
    const shoppingCartIcon = screen.getByTestId("shopping-cart-icon");

    expect(shoppingCartIcon).toBeInTheDocument();
  });

  test("render ShoppingCart icon on /products", () => {
    const Stub = createRoutesStub([
      {
        path: "/products/:productId",
        Component: () => navbar,
      },
    ]);

    render(<Stub initialEntries={["/products/4"]} />);
    const shoppingCartIcon = screen.getByTestId("shopping-cart-icon");

    expect(shoppingCartIcon).toBeInTheDocument();
  });
});
