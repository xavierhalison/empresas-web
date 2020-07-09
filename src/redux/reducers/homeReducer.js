import { TOGGLE_SEARCH_BAR, GO_TO_COMPANY_SCREEN } from "../actions/types";

const initialState = {
  showSearchBar: false,
  showCompanyScreen: false,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SEARCH_BAR:
      return { ...state, showSearchBar: !state.showSearchBar };
    case GO_TO_COMPANY_SCREEN:
      return {
        ...state,
        showCompanyScreen: true,
        company: {
          name: "Empresa",
          img: "teste",
          text:
            "lorem ipsum dolor sit amet consectetur adipiscing elit sed doeiusmod tempor incididunt ut labore et",
        },
      };
    default:
      return state;
  }
};

export default homeReducer;
