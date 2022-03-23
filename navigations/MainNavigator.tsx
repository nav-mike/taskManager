import React, { FC } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";

const Drawer = createDrawerNavigator<MainNavigatorProps>();

const MainNavigator: FC = () => {
  return (
    <Drawer.Navigator initialRouteName={"Stack"}>
      <Drawer.Screen
        name={"Stack"}
        component={StackNavigator}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export type MainNavigatorProps = {
  Stack: undefined;
};

export default MainNavigator;
