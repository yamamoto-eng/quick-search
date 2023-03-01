import type { IconPosition } from "~types/iconPosition";

export const isHorizontalDirection = (value: unknown): value is IconPosition["horizontal"]["direction"] => {
  return value === "left" || value === "center" || value === "right";
};
