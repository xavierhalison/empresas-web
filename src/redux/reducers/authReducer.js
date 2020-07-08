import { STORE_AUTH } from "../actions/types";

const initialState = {
  isLogged: false,
  accessToken: "",
  client: "",
  uid: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_AUTH:
      const { accessToken, client, uid } = action.payload;
      console.log(accessToken, client, uid);
      return {
        ...state,
        isLogged: true,
        accessToken: accessToken,
        client: client,
        uid: uid,
      };
    default:
      return state;
  }
};

export default authReducer;
