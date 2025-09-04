import { render, screen } from "@testing-library/react";
import StatusHandler from "./StatusHandler";

vi.mock("../ui/Loader/Loader", () => ({
  default: () => <svg data-testid="loader"></svg>,
}));

describe("StatusHandler component", () => {
  test("return null if loading and error props aren't passed", () => {
    const { container } = render(<StatusHandler />);

    expect(container).toBeEmptyDOMElement();
  });

  test("render Loader when loading prop is true", () => {
    render(<StatusHandler loading />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  test("render error message when error prop is passed", () => {
    const { container } = render(<StatusHandler error="HTTP Error" />);

    expect(container).toMatchSnapshot();
  });
});
