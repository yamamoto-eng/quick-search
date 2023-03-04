import type { IconPosition } from "~types/iconPosition";

const STORAGE_KEY = "icon-position";

const INITIAL_VALUE = {
  vertical: {
    direction: "center",
    space: 0,
  },
  horizontal: {
    direction: "center",
    space: 0,
  },
} as const satisfies IconPosition;

export const ICON_POSITION = {
  STORAGE_KEY,
  INITIAL_VALUE,
};
