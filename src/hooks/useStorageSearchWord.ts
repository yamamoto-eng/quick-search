import { useStorage } from "@plasmohq/storage/hook";

import { SEARCH_WORD } from "~constant/searchWord";
import type { SearchWord } from "~types/searchWord";

export const useStorageSearchWord = () => {
  const [searchWord, setSearchWord] = useStorage<SearchWord>(SEARCH_WORD.STORAGE_KEY, (value) =>
    value === undefined ? SEARCH_WORD.INITIAL_VALUE : value
  );

  const setPrefix = async (word: SearchWord["prefix"]) => {
    await setSearchWord((prev) => {
      if (!!prev) {
        return {
          ...prev,
          prefix: word,
        };
      }
      throw new Error("error");
    });
  };

  const setSuffix = async (word: SearchWord["suffix"]) => {
    await setSearchWord((prev) => {
      if (!!prev) {
        return {
          ...prev,
          suffix: word,
        };
      }
      throw new Error("error");
    });
  };

  return {
    searchWord,
    setPrefix,
    setSuffix,
  };
};
