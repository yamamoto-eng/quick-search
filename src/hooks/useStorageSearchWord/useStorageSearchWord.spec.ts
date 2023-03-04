import { act, renderHook } from "@testing-library/react";

import { useStorage } from "@plasmohq/storage/hook";

import { SEARCH_WORD } from "~constant";

import { useStorageSearchWord } from "./useStorageSearchWord";

jest.mock("@plasmohq/storage/hook");

const mockUseStorage = useStorage as jest.MockedFunction<typeof useStorage>;

mockUseStorage.mockReturnValue([
  SEARCH_WORD.INITIAL_VALUE,
  jest.fn(),
  { setRenderValue: jest.fn(), setStoreValue: jest.fn(), remove: jest.fn() },
]);

afterAll(() => {
  mockUseStorage.mockReset();
});

describe("useStorageSearchWord", () => {
  it("should searchWord is initial value", () => {
    const { result } = renderHook(() => useStorageSearchWord());

    expect(result.current.searchWord).toEqual(SEARCH_WORD.INITIAL_VALUE);
  });

  it("should to be called with correct args", () => {
    const { result } = renderHook(() => useStorageSearchWord());

    const setPrefixSpy = jest.spyOn(result.current, "setPrefix");
    const setSuffixSpy = jest.spyOn(result.current, "setSuffix");

    act(() => {
      void result.current.setPrefix("prefix");
    });
    expect(setPrefixSpy).toHaveBeenCalled();
    expect(setPrefixSpy).toBeCalledWith("prefix");

    act(() => {
      void result.current.setSuffix("suffix");
    });
    expect(setSuffixSpy).toHaveBeenCalled();
    expect(setSuffixSpy).toBeCalledWith("suffix");
  });
});
