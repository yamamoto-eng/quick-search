import { useStorage } from "@plasmohq/storage/hook";

import { ICON_POSITION } from "~constant";
import type { IconPosition } from "~types";

export const useStorageIconPosition = () => {
  const [iconPosition, setIconPosition] = useStorage<IconPosition>(ICON_POSITION.STORAGE_KEY, (value) =>
    value === undefined ? ICON_POSITION.INITIAL_VALUE : value
  );

  const setVerticalDirection = async (direction: IconPosition["vertical"]["direction"]) => {
    await setIconPosition((prev) => {
      if (!!prev) {
        return {
          ...prev,
          vertical: {
            ...prev.vertical,
            direction,
          },
        };
      }
      throw new Error("error");
    });
  };

  const setVerticalSpace = async (space: IconPosition["vertical"]["space"]) => {
    await setIconPosition((prev) => {
      if (!!prev) {
        return {
          ...prev,
          vertical: {
            ...prev.vertical,
            space,
          },
        };
      }
      throw new Error("error");
    });
  };

  const setHorizontalDirection = async (direction: IconPosition["horizontal"]["direction"]) => {
    await setIconPosition((prev) => {
      if (!!prev) {
        return {
          ...prev,
          horizontal: {
            ...prev.horizontal,
            direction,
          },
        };
      }
      throw new Error("error");
    });
  };

  const setHorizontalSpace = async (space: IconPosition["horizontal"]["space"]) => {
    await setIconPosition((prev) => {
      if (!!prev) {
        return {
          ...prev,
          horizontal: {
            ...prev.horizontal,
            space,
          },
        };
      }
      throw new Error("error");
    });
  };

  return {
    iconPosition,
    setVerticalDirection,
    setVerticalSpace,
    setHorizontalDirection,
    setHorizontalSpace,
  };
};
