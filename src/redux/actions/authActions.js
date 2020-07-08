import { STORE_AUTH, SIGNIN_ERROR } from "./types";

export const storeAuth = (accessToken, client, uid) => ({
  type: STORE_AUTH,
  payload: {
    accessToken: accessToken,
    client: client,
    uid: uid,
  },
});

export const signInError = (msg) => ({
  type: SIGNIN_ERROR,
  payload: {
    errorMessage: msg,
  },
});
