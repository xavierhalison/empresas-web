import {
  TOGGLE_SEARCH_BAR,
  SEARCH_STRING,
  GO_TO_COMPANY_SCREEN,
  SIGN_IN,
} from "../actions/types";

const initialState = {
  isLogged: false,
  showSearchBar: false,
  searchResults: [],
  showCompanyScreen: false,
  company: {},
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isLogged: true };
    case TOGGLE_SEARCH_BAR:
      return { ...state, showSearchBar: !state.showSearchBar };
    case SEARCH_STRING:
      let res = [];
      if (action.payload.str === "") {
        res = [];
      } else {
        res = ["teste"];
      }
      return { ...state, searchResults: res };
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
