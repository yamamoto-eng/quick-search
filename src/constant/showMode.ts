import type { ShowMode } from "~types";

const STORAGE_KEY = "show-mode";

const INITIAL_VALUE = "tab" as const satisfies ShowMode;

export const SHOW_MODE = {
  STORAGE_KEY,
  INITIAL_VALUE,
};
