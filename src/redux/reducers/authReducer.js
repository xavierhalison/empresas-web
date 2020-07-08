import { STORE_AUTH, SIGNIN_ERROR, TOGGLE_LOADING } from "../actions/types";

const initialState = {
  isLogged: true,
  accessToken: "oMwJGWIY6HNEf4dw1hoXRQ",
  client: "-3KdhFHoisJubAKYwTfwnQ",
  uid: "testeapple@ioasys.com.br",
  signInFailed: false,
  errorMessage: "",
  showLoading: false,
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

      return { ...state, signInFailed: true, errorMessage: errorMessage };

    case TOGGLE_LOADING:
      return { ...state, showLoading: !state.showLoading };

    default:
      return state;
  }
};

export default authReducer;