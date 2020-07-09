import { LOAD_COMPANIES, SEARCH_COMPANY } from "../actions/types";

const initialState = {
  companies: [],
  filteredCompanies: [],
  queryLength: 0,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COMPANIES: {
      const { companies } = action.payload;

      return { ...state, companies: companies };
    }
    case SEARCH_COMPANY: {
      const { companies } = state;
      const { query } = action.payload;

      let filter = [];

      if (query.length > 0) {
        filter = companies.filter((company) =>
          company.enterprise_name.toLowerCase().includes(query.toLowerCase())
        );
      }

      return { ...state, filteredCompanies: filter, queryLength: query.length };
    }
    default:
      return state;
  }
};

export default homeReducer;
