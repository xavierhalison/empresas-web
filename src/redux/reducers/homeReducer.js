import { TOGGLE_SEARCH_BAR } from "../actions/types";

const initialState = {
  showSearchBar: false,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SEARCH_BAR:
      return { ...state, showSearchBar: !state.showSearchBar };
    default:
      return state;
  }
};

export default homeReducer;
