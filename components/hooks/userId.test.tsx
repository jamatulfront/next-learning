import { renderHook } from "@testing-library/react";
import { useId } from "./userId";

describe("useId hook check", () => {
  it("Is id have words and digits", () => {
    const { result } = renderHook(useId);
    expect(result.current).toMatch(/(\w|\d){13}/);
  });
  it("Generate unique id per render", () => {
    const { result: res1 } = renderHook(useId);
    const { result: res2 } = renderHook(useId);

    expect(res1.current).not.toBe(res2.current);
  });
});
