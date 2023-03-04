import type { SearchWord } from "~types/searchWord";

const STORAGE_KEY = "search-word";

const INITIAL_VALUE = {
  prefix: "",
  suffix: "",
} as const satisfies SearchWord;

export const SEARCH_WORD = {
  STORAGE_KEY,
  INITIAL_VALUE,
};
