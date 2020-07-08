import { STORE_AUTH, SIGNIN_ERROR } from "../actions/types";

const initialState = {
  isLogged: false,
  accessToken: "",
  client: "",
  uid: "",
  signInFailed: false,
  errorMessage: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_AUTH:
      const { accessToken, client, uid } = action.payload;

      return {
        ...state,
        isLogged: true,
        accessToken: accessToken,
        client: client,
        uid: uid,
      };

    case SIGNIN_ERROR:
      const { errorMessage } = action.payload;

      return { state, signInFailed: true, errorMessage: errorMessage };

    default:
      return state;
  }
};

export default authReducer;
