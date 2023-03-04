import type { ShowMode } from "~types";

export const isShowMode = (value: unknown): value is ShowMode => {
  return value === "tab" || value === "window";
};
