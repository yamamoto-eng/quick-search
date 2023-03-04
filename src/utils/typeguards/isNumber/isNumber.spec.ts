import { isNumber } from "./isNumber";

describe("isNumber", () => {
  it("should return true if number", () => {
    expect(isNumber(0)).toBe(true);
    expect(isNumber(1)).toBe(true);
  });

  it("should return false if not number", () => {
    expect(isNumber("0")).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber({})).toBe(false);
  });
});
