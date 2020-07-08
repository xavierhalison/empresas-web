import axios from "axios";
import {
  storeAuth,
  signInError,
  toggleLoading,
} from "../redux/actions/authActions";
import store from "../redux/store";

const BASE_URL = "https://empresas.ioasys.com.br/api/v1/";

export const signIn = (mail, password) => {
  store.dispatch(toggleLoading());
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
      console.log(accessToken, client, uid);
      store.dispatch(toggleLoading());
    })
    .catch((err) => {
      const errorMessage = err.response.data.errors[0];
      store.dispatch(signInError(errorMessage));
      store.dispatch(toggleLoading());
    });
};
