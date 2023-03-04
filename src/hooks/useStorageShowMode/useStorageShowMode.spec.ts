import { act, renderHook } from "@testing-library/react";

import { useStorage } from "@plasmohq/storage/hook";

import { SHOW_MODE } from "~constant";

import { useStorageShowMode } from "./useStorageShowMode";

jest.mock("@plasmohq/storage/hook");

const mockUseStorage = useStorage as jest.MockedFunction<typeof useStorage>;

mockUseStorage.mockReturnValue([
  SHOW_MODE.INITIAL_VALUE,
  jest.fn(),
  { setRenderValue: jest.fn(), setStoreValue: jest.fn(), remove: jest.fn() },
]);

afterAll(() => {
  mockUseStorage.mockReset();
});

describe("useStorageShowMode", () => {
  it("should showMode is initial value", () => {
    const { result } = renderHook(() => useStorageShowMode());

    expect(result.current.showMode).toEqual(SHOW_MODE.INITIAL_VALUE);
  });

  it("should to be called with correct args", () => {
    const { result } = renderHook(() => useStorageShowMode());

    act(() => {
      void result.current.setShowMode("window");
    });
    expect(result.current.setShowMode).toHaveBeenCalled();
    expect(result.current.setShowMode).toBeCalledWith("window");
  });
});
