import { getGoogleSearchURL } from "./getGoogleSearchURL";

describe("getGoogleSearchURL", () => {
  it("should return google search url", () => {
    const url = getGoogleSearchURL("test");
    expect(url).toBe("https://www.google.com/search?q=test");
  });
});
