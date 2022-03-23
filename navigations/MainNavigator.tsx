import React, { FC } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainScreen from "../screens/MainScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import AppHeaderButton from "../components/AppHeaderButton";

const Drawer = createDrawerNavigator<MainNavigatorProps>();

const MainNavigator: FC = () => {
  return (
    <Drawer.Navigator initialRouteName={"Main"}>
      <Drawer.Screen
        name={"Main"}
        component={MainScreen}
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
  Main: undefined;
};

export default MainNavigator;
