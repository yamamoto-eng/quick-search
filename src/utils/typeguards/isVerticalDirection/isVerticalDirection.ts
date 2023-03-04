import type { IconPosition } from "~types/iconPosition";

export const isVerticalDirection = (value: unknown): value is IconPosition["vertical"]["direction"] => {
  return value === "top" || value === "bottom";
};
