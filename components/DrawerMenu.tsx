import React, { FC } from "react";
import { Text } from "react-native";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import UserCard from "./UserCard";
import User from "../models/user";

const DrawerMenu: FC<DrawerContentComponentProps> = (props) => {
  const user = {
    userType: "local",
    id: "u1",
    email: "barlyhenan@yahoo.com",
    fullName: "Barly Nernandito",
    avatar: "https://i.imgur.com/7yUvePI.png",
  } as User;

  return (
    <DrawerContentScrollView {...props}>
      <UserCard user={user} />
      <Text>My Daily</Text>
      <Text>Upcoming</Text>
      <Text>Task Done</Text>
      <Text>Title: My List Task</Text>
      <Text>Money saver</Text>
      <Text>Monthly Expenditure</Text>
    </DrawerContentScrollView>
  );
};

export default DrawerMenu;
