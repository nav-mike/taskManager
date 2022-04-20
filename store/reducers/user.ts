import { initialState, State } from "../states/user";
import { UserAction } from "../actions/user";

const userReducer = (state: State = initialState, _action: UserAction) => {
  return state;
};

export default userReducer;
