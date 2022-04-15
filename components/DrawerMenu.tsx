import React, { FC } from "react";
import { Text } from "react-native";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

const DrawerMenu: FC<DrawerContentComponentProps> = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <Text>Current User card</Text>
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
