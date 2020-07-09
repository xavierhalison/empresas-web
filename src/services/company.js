import axios from "axios";
import { loadCompanies, selectCompany } from "../redux/actions/companyActions";
import store from "../redux/store";

const BASE_URL = "https://empresas.ioasys.com.br/api/v1";

export const getCompanies = (credentials) => {
  const params = {
    "access-token": credentials.accessToken,
    client: credentials.client,
    uid: credentials.uid,
  };

  axios
    .get(`${BASE_URL}/enterprises`, { params })
    .then((res) => JSON.parse(res.request.response))
    .then((data) => store.dispatch(loadCompanies(data.enterprises)))
    .catch((err) => console.error(err));
};

export const getCompany = (id, credentials) => {
  const params = {
    "access-token": credentials.accessToken,
    client: credentials.client,
    uid: credentials.uid,
  };

  axios
    .get(`${BASE_URL}/enterprises/${id}`, { params })
    .then((res) => JSON.parse(res.request.response))
    .then((data) => store.dispatch(selectCompany(data.enterprise)))
    .catch((err) => console.error(err));
};
