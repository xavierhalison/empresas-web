import { LOAD_COMPANIES, SEARCH_COMPANY, SELECT_COMPANY } from "./types";

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
