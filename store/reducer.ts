import { combineReducers, createStore } from "redux";
import authReducer from "./reducers/auth";

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
