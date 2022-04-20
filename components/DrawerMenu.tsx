import React, { FC } from "react";
import { StyleSheet, Text } from "react-native";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import UserCard from "./UserCard";
import User from "../models/user";
import DrawerMenuItem from "./DrawerMenuItem";

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
      <DrawerMenuItem
        title={"My Daily"}
        icon={"star-half-outline"}
        onPress={() => {}}
      />
      <DrawerMenuItem
        title={"Upcoming"}
        icon={"calendar-outline"}
        onPress={() => {}}
      />
      <DrawerMenuItem
        title={"Tasks Done"}
        icon={"checkmark-circle-outline"}
        onPress={() => {}}
      />
      <Text style={styles.title}>Title: My List Task</Text>
      <DrawerMenuItem
        title={"Money saver"}
        icon={"list-circle-outline"}
        onPress={() => {}}
      />
      <DrawerMenuItem
        title={"Monthly Expenditure"}
        icon={"list-circle-outline"}
        onPress={() => {}}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 19,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10,
  },
});

export default DrawerMenu;
