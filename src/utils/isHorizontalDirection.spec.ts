import { isHorizontalDirection } from "./isHorizontalDirection";

describe("isHorizontalDirection", () => {
  it("should return true if left or center or right", () => {
    expect(isHorizontalDirection("left")).toBe(true);
    expect(isHorizontalDirection("right")).toBe(true);
  });
  it("should return false if not left or center or right", () => {
    expect(isHorizontalDirection("top")).toBe(false);
    expect(isHorizontalDirection("")).toBe(false);
    expect(isHorizontalDirection(0)).toBe(false);
    expect(isHorizontalDirection(true)).toBe(false);
  });
});
