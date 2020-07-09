import {
  LOAD_COMPANIES,
  SEARCH_COMPANY,
  SELECT_COMPANY,
  BACK_TO_HOME,
} from "../actions/types";

const initialState = {
  companies: [],
  filteredCompanies: [],
  queryLength: 0,
  selectedCompany: {},
  showCompanyScreen: false,
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
    case SELECT_COMPANY: {
      const { company } = action.payload;
      return {
        ...state,
        selectedCompany: { ...company },
        showCompanyScreen: true,
      };
    }
    case BACK_TO_HOME: {
      return {
        ...state,
        selectedCompany: initialState.selectedCompany,
        showCompanyScreen: false,
      };
    }
    default:
      return state;
  }
};

export default homeReducer;
