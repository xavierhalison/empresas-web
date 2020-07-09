import axios from "axios";
import { loadCompanies, selectCompany } from "../redux/actions/companyActions";
import store from "../redux/store";

const BASE_URL = "https://empresas.ioasys.com.br/api/v1";

const state = store.getState();
const { accessToken, client, uid } = state.auth;

const params = {
  "access-token": accessToken,
  client: client,
  uid: uid,
};

export const getCompanies = () => {
  axios
    .get(`${BASE_URL}/enterprises`, { params })
    .then((res) => JSON.parse(res.request.response))
    .then((data) => store.dispatch(loadCompanies(data.enterprises)))
    .catch((err) => console.error(err));
};

export const getCompany = (id) => {
  axios
    .get(`${BASE_URL}/enterprises/${id}`, { params })
    .then((res) => JSON.parse(res.request.response))
    .then((data) => store.dispatch(selectCompany(data.enterprise)))
    .catch((err) => console.error(err));
};
