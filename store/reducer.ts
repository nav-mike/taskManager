import { combineReducers, createStore } from "redux";
import authReducer from "./reducers/auth";
import tasksReducer from "./reducers/tasks";

const rootReducer = combineReducers({
  auth: authReducer,
  tasks: tasksReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
