import {
  TOGGLE_SEARCH_BAR,
  SEARCH_STRING,
  GO_TO_COMPANY_SCREEN,
} from "./types";

export const toggleSearchBar = () => ({
  type: TOGGLE_SEARCH_BAR,
});

export const searchString = (str) => ({
  type: SEARCH_STRING,
  payload: {
    str: str,
  },
});

export const goToCompanyScreen = (name, img, text) => ({
  type: GO_TO_COMPANY_SCREEN,
  payload: {
    name: name,
    img: img,
    text: text,
  },
});
