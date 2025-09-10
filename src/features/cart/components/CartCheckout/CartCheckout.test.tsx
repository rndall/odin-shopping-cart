import { render } from "@testing-library/react";
import CartCheckout from "./CartCheckout";
import type { CartProps } from "../../types/props";

vi.mock("../CartTable/CartTable", () => ({
  default: ({ cart }: CartProps) => (
    <div>
      {cart.map(({ item }) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  ),
}));

vi.mock("../CheckoutFooter/CheckOutFooter", () => ({
  default: ({ subtotal }: { subtotal: string }) => <div>{subtotal}</div>,
}));

describe("CartCheckout component", () => {
  const renderComponent = (props: CartProps) => {
    const { container } = render(<CartCheckout {...props} />);

    return {
      container,
    };
  };

  test("render 'Items' if cartItemCount !== 1", () => {
    const props: CartProps = {
      cart: [
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
          quantity: 3,
        },
      ],
      cartItemCount: 5,
      handleAdjustItemQuantity: () => {},
      handleRemoveItem: () => {},
    };

    const { container } = renderComponent(props);

    expect(container).toMatchSnapshot();
  });

  test("render 'Item' if cartItemCount === 1", () => {
    const props: CartProps = {
      cart: [
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
          quantity: 1,
        },
      ],
      cartItemCount: 1,
      handleAdjustItemQuantity: () => {},
      handleRemoveItem: () => {},
    };

    const { container } = renderComponent(props);

    expect(container).toMatchSnapshot();
  });
});
