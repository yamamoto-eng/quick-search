import { isString } from "./isString";

describe("isString", () => {
  it("should return true if string", () => {
    expect(isString("")).toBe(true);
    expect(isString("test")).toBe(true);
  });

  it("should return false if not string", () => {
    expect(isString(1)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString({})).toBe(false);
  });
});
