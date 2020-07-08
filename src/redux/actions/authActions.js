import { STORE_AUTH } from "./types";

export const storeAuth = (accessToken, client, uid) => ({
  type: STORE_AUTH,
  payload: {
    accessToken: accessToken,
    client: client,
    uid: uid,
  },
});
