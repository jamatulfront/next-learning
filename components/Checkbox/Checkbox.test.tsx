import { render, screen, fireEvent } from "@/test-utils";

import { Checkbox } from "./Checkbox";

describe("Checkbox test cases", () => {
  it("Render check", () => {
    const onChange = jest.fn();
    jest.spyOn(Math, "random").mockReturnValue(0.999999999);

    const { asFragment } = render(<Checkbox onChange={onChange} />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("Check onChange callback", () => {
    const onChange = jest.fn();

    render(<Checkbox onChange={onChange} />);

    const element = screen.getByText("✔");

    fireEvent.click(element);

    expect(onChange).toHaveBeenCalled();
  });
});
