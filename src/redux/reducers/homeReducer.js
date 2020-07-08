import { TOGGLE_SEARCH_BAR, SEARCH_STRING } from "../actions/types";

const initialState = {
  showSearchBar: false,
  searchResults: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SEARCH_BAR:
      return { ...state, showSearchBar: !state.showSearchBar };
    case SEARCH_STRING:
      let res = [];
      console.log(action.payload.str);
      if (action.payload.str === "") {
        res = [];
      } else {
        res = ["teste"];
      }
      return { ...state, searchResults: res };
    default:
      return state;
  }
};

export default homeReducer;
