import { render } from "@testing-library/react"
import CartCheckout from "./CartCheckout"
import { useCart } from "../../../products/hooks/useCart"

vi.mock("../../../products/hooks/useCart", () => ({
  useCart: vi.fn(),
}))

vi.mock("../CartTable/CartTable", () => ({
  default: () => <div>Cart Table</div>,
}))

vi.mock("../CheckoutFooter", () => ({
  default: ({ subtotal }: { subtotal: string }) => <div>{subtotal}</div>,
}))

describe("CartCheckout component", () => {
  const renderComponent = () => {
    const { container } = render(<CartCheckout />)

    return {
      container,
    }
  }

  test("render 'Items' if cartItemCount !== 1", () => {
    const mockedUseCartReturn = {
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
      handleAddToCart: () => {},
      handleClearCart: () => {},
    }

    vi.mocked(useCart).mockReturnValue(mockedUseCartReturn)

    const { container } = renderComponent()

    expect(container).toMatchSnapshot()
  })

  test("render 'Item' if cartItemCount === 1", () => {
    const mockedUseCartReturn = {
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
      handleAddToCart: () => {},
      handleClearCart: () => {},
    }

    vi.mocked(useCart).mockReturnValue(mockedUseCartReturn)

    const { container } = renderComponent()

    expect(container).toMatchSnapshot()
  })
})
