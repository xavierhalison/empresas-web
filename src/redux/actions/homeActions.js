import { TOGGLE_SEARCH_BAR, GO_TO_COMPANY_SCREEN } from "./types";

export const toggleSearchBar = () => ({
  type: TOGGLE_SEARCH_BAR,
});

export const goToCompanyScreen = (name, img, text) => ({
  type: GO_TO_COMPANY_SCREEN,
  payload: {
    name: name,
    img: img,
    text: text,
  },
});
