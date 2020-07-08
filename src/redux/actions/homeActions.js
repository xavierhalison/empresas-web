import { TOGGLE_SEARCH_BAR, SEARCH_STRING } from "./types";

export const toggleSearchBar = () => ({
  type: TOGGLE_SEARCH_BAR,
});

export const searchString = (str) => ({
  type: SEARCH_STRING,
  payload: {
    str: str,
  },
});
