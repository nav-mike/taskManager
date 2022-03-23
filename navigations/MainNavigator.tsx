import React, { FC } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import AppHeaderButton from "../components/AppHeaderButton";
import StackNavigator from "./StackNavigator";

const Drawer = createDrawerNavigator<MainNavigatorProps>();

const MainNavigator: FC = () => {
  return (
    <Drawer.Navigator initialRouteName={"Stack"}>
      <Drawer.Screen
        name={"Stack"}
        component={StackNavigator}
        options={(props) => ({
          headerTitle: "Task Manager",
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
              <Item
                title={"Notifications"}
                iconName={"notifications-outline"}
                onPress={() => {}}
              />
            </HeaderButtons>
          ),
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
              <Item
                title={"Menu"}
                iconName={"grid-outline"}
                onPress={() => {
                  props.navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
    </Drawer.Navigator>
  );
};

export type MainNavigatorProps = {
  Stack: undefined;
};

export default MainNavigator;
