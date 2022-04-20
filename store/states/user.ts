import User from "../../models/user";

export type State = {
  user: User;
};

export const initialState: State = {
  user: {
    userType: "local",
    id: "u0",
    email: "fake@email.com",
    fullName: "Fake User",
    avatar: "avatar.jpg",
  },
};
