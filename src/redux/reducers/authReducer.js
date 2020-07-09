import { STORE_AUTH, SIGNIN_ERROR, TOGGLE_LOADING } from "../actions/types";

const initialState = {
  isLogged: false,
  credentials: { accessToken: "", client: "", uid: "" },
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
        credentials: { accessToken: accessToken, client: client, uid: uid },
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
