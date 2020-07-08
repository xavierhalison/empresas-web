import axios from "axios";
import { storeAuth } from "../redux/actions/authActions";
import store from "../redux/store";

const BASE_URL = "https://empresas.ioasys.com.br/api/v1/";

export const signIn = (mail, password) => {
  store.dispatch(storeAuth("accessToken", "client", "uid"));
  axios
    .post(`${BASE_URL}/users/auth/sign_in`, {
      email: mail,
      password: password,
    })
    .then((res) => res.headers)
    .then((headers) => {
      const accessToken = headers["access-token"];
      const { client, uid } = headers;

      store.dispatch(storeAuth(accessToken, client, uid));
    })
    .catch((err) => console.error(err));
};
