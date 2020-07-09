import {
  LOAD_COMPANIES,
  SEARCH_COMPANY,
  SELECT_COMPANY,
  BACK_TO_HOME,
} from "./types";

export const loadCompanies = (companies) => ({
  type: LOAD_COMPANIES,
  payload: {
    companies: companies,
  },
});

export const searchCompany = (str) => ({
  type: SEARCH_COMPANY,
  payload: {
    query: str,
  },
});

export const selectCompany = (company) => ({
  type: SELECT_COMPANY,
  payload: {
    company: company,
  },
});

export const backToHome = () => ({
  type: BACK_TO_HOME,
});
