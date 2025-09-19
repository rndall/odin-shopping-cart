import { screen, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ItemCount from "./ItemCount"

describe("ItemCount component", () => {
  test("render quantity", () => {
    const { container } = render(
      <ItemCount quantity={1} setQuantity={() => {}} />,
    )

    expect(container).toMatchSnapshot()
  })

  describe("buttons", () => {
    test("call setQuantity after increment button click", async () => {
      const setQuantity = vi.fn()
      const user = userEvent.setup()

      render(<ItemCount quantity={1} setQuantity={setQuantity} />)

      const incrementBtn = screen.getByRole("button", { name: "+" })

      await user.click(incrementBtn)

      expect(setQuantity).toHaveBeenCalled()
      expect(setQuantity).toHaveBeenCalledWith(2)
    })

    test("call setQuantity after decrement button click", async () => {
      const setQuantity = vi.fn()
      const user = userEvent.setup()

      render(<ItemCount quantity={5} setQuantity={setQuantity} />)

      const decrementBtn = screen.getByRole("button", { name: "-" })

      await user.click(decrementBtn)

      expect(setQuantity).toHaveBeenCalledWith(4)
    })

    test("do not allow quantity to drop below 1", async () => {
      const setQuantity = vi.fn()

      render(<ItemCount quantity={1} setQuantity={setQuantity} />)

      const decrementButton = screen.getByRole("button", { name: "-" })

      expect(decrementButton).toBeDisabled()
    })
  })
})
