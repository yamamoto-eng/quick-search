import { isVerticalDirection } from "./isVerticalDirection";

describe("isVerticalDirection", () => {
  it("should return true if top or center or bottom", () => {
    expect(isVerticalDirection("top")).toBe(true);
    expect(isVerticalDirection("bottom")).toBe(true);
  });
  it("should return false if not top or center or bottom", () => {
    expect(isVerticalDirection("left")).toBe(false);
    expect(isVerticalDirection("")).toBe(false);
    expect(isVerticalDirection(0)).toBe(false);
    expect(isVerticalDirection(true)).toBe(false);
  });
});
