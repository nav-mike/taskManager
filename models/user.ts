type User = {
  userType: "local" | "online";
  id: string;
  email: string;
  fullName: string;
  avatar: string;
};

export default User;
