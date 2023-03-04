import { isShowMode } from "./isShowMode";

describe("isShowMode", () => {
  it("should return true if tab or window", () => {
    expect(isShowMode("tab")).toBe(true);
    expect(isShowMode("window")).toBe(true);
  });
  it("should return false if not tab or window", () => {
    expect(isShowMode("")).toBe(false);
    expect(isShowMode(0)).toBe(false);
    expect(isShowMode(true)).toBe(false);
    expect(isShowMode({})).toBe(false);
  });
});
