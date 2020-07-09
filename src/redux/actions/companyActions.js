import { LOAD_COMPANIES, SEARCH_COMPANY } from "./types";

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
