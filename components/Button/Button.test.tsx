import React from "react";
import { render, screen, fireEvent } from "@/test-utils";
import { Button } from "./Button";

describe("Button test cases :", () => {
  it("Render check", () => {
    const onClick = jest.fn();
    const { asFragment } = render(<Button onClick={onClick}>Button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
  it("Check is OnClick is working", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Button</Button>);
    const btnElement = screen.getByRole("button");
    fireEvent.click(btnElement);
    expect(onClick).toHaveBeenCalled();
  });
});
