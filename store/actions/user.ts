import User from "../../models/user";

export const GET_USER = "GET_USER";

export type GetUserAction = {
  type: typeof GET_USER;
  payload: User;
};

export type UserAction = GetUserAction;

export const getUser = (user: User): UserAction => ({
  type: GET_USER,
  payload: user,
});
