import { initialState, State } from "../states/tasks";

const tasksReducer = (state: State = initialState, _: any) => {
  return state;
};

export default tasksReducer;
