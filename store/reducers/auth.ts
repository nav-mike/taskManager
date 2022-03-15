import { initialState, State } from "../states/auth";
import { AuthAction, SIGN_IN, SIGN_OUT, SIGN_UP } from "../actions/auth";

const authReducer = (state: State = initialState, action: AuthAction) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
      };
    case SIGN_UP:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
      };
    case SIGN_OUT:
      return {
        ...state,
        token: null,
        userId: null,
      };
    default:
      return state;
  }
};

export default authReducer;
