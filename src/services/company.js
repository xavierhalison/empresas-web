import axios from "axios";
import { loadCompanies } from "../redux/actions/companyActions";
import store from "../redux/store";

const BASE_URL = "https://empresas.ioasys.com.br/api/v1";

export const getCompanies = () => {
  const state = store.getState();
  const { accessToken, client, uid } = state.auth;

  const params = {
    "access-token": accessToken,
    client: client,
    uid: uid,
  };

  axios
    .get(`${BASE_URL}/enterprises`, { params })
    .then((res) => JSON.parse(res.request.response))
    .then((data) => store.dispatch(loadCompanies(data.enterprises)))
    .catch((err) => console.error(err));
};
