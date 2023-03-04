import { act, renderHook } from "@testing-library/react";

import { useStorage } from "@plasmohq/storage/hook";

import { ICON_POSITION } from "~constant/iconPosition";

import { useStorageIconPosition } from "./useStorageIconPosition";

jest.mock("@plasmohq/storage/hook");

const mockUseStorage = useStorage as jest.MockedFunction<typeof useStorage>;

mockUseStorage.mockReturnValue([
  ICON_POSITION.INITIAL_VALUE,
  jest.fn(),
  { setRenderValue: jest.fn(), setStoreValue: jest.fn(), remove: jest.fn() },
]);

afterAll(() => {
  mockUseStorage.mockReset();
});

describe("useStorageIconPosition", () => {
  it("should iconPosition is initial value", () => {
    const { result } = renderHook(() => useStorageIconPosition());

    expect(result.current.iconPosition).toEqual(ICON_POSITION.INITIAL_VALUE);
  });

  it("should to be called with correct args", () => {
    const { result } = renderHook(() => useStorageIconPosition());

    const setVerticalDirectionSpy = jest.spyOn(result.current, "setVerticalDirection");
    const setVerticalSpaceSpy = jest.spyOn(result.current, "setVerticalSpace");
    const setHorizontalDirectionSpy = jest.spyOn(result.current, "setHorizontalDirection");
    const setHorizontalSpaceSpy = jest.spyOn(result.current, "setHorizontalSpace");

    act(() => {
      void result.current.setVerticalDirection("top");
    });
    expect(setVerticalDirectionSpy).toHaveBeenCalled();
    expect(setVerticalDirectionSpy).toBeCalledWith("top");

    act(() => {
      void result.current.setVerticalSpace(0);
    });
    expect(setVerticalSpaceSpy).toHaveBeenCalled();
    expect(setVerticalSpaceSpy).toBeCalledWith(0);

    act(() => {
      void result.current.setHorizontalDirection("left");
    });
    expect(setHorizontalDirectionSpy).toHaveBeenCalled();
    expect(setHorizontalDirectionSpy).toBeCalledWith("left");

    act(() => {
      void result.current.setHorizontalSpace(10);
    });
    expect(setHorizontalSpaceSpy).toHaveBeenCalled();
    expect(setHorizontalSpaceSpy).toBeCalledWith(10);
  });
});
