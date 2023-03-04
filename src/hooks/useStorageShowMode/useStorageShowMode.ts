import { useStorage } from "@plasmohq/storage/hook";

import { SHOW_MODE } from "~constant";
import type { ShowMode } from "~types";

export const useStorageShowMode = () => {
  const [showMode, setShowMode] = useStorage<ShowMode>(SHOW_MODE.STORAGE_KEY, (value) =>
    value === undefined ? SHOW_MODE.INITIAL_VALUE : value
  );

  return {
    showMode,
    setShowMode,
  };
};
