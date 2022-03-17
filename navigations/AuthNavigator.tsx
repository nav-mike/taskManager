import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import AppHeaderButton from "../AppHeaderButton";

const Stack = createStackNavigator();

const AuthNavigator: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Main"}
      defaultScreenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={() => ({
          headerTitle: "Task Manager",
          headerRight: (props) => (
            <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
              <Item
                title={"Notifications"}
                iconName={"notifications-outline"}
                onPress={() => {}}
              />
            </HeaderButtons>
          ),
          headerLeft: (props) => (
            <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
              <Item
                title={"Menu"}
                iconName={"grid-outline"}
                onPress={() => {}}
              />
            </HeaderButtons>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export type AuthNavigationParams = {
  Main: undefined;
};

export default AuthNavigator;
