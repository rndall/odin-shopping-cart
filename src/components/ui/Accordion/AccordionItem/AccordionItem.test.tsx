import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AccordionItem from "./AccordionItem";

describe("AccordionItem component", () => {
  const renderComponent = () => {
    const props = {
      trigger: "Description",
      content: "lorem ipsum",
    };

    render(<AccordionItem {...props} />);

    return {
      triggerBtn: screen.getByRole("button", { name: props.trigger }),
      content: screen.getByTestId("accordion-item-content"),
    };
  };

  test("renders content hidden", () => {
    const { content } = renderComponent();

    expect(content).not.toHaveClass(/contentVisible/i);
  });

  test("renders content visible on trigger click", async () => {
    const { triggerBtn, content } = renderComponent();
    const user = userEvent.setup();

    await user.click(triggerBtn);

    expect(content).toHaveClass(/contentVisible/i);
  });
});
