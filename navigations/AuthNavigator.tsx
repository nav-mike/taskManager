import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainNavigator from "./MainNavigator";
import AuthScreen from "../screens/AuthScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import AppHeaderButton from "../components/AppHeaderButton";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createStackNavigator();

const AuthNavigator: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={"MainNavigator"}
      defaultScreenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="MainNavigator"
        component={MainNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AuthScreen"
        component={AuthScreen}
        options={(props) => {
          return {
            headerTitle: "Authentication",
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
                <Item
                  title={"Cancel"}
                  iconName={"arrow-back-outline"}
                  onPress={() => {
                    props.navigation.goBack();
                  }}
                />
              </HeaderButtons>
            ),
          };
        }}
      />
      <Stack.Screen
        name={"SettingsScreen"}
        component={SettingsScreen}
        options={(props) => {
          return {
            headerTitle: "Settings",
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
                <Item
                  title={"Cancel"}
                  iconName={"arrow-back-outline"}
                  onPress={() => {
                    props.navigation.goBack();
                  }}
                />
              </HeaderButtons>
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
};

export type AuthNavigationParams = {
  MainNavigator: undefined;
  AuthScreen: undefined;
  SettingsScreen: undefined;
};

export default AuthNavigator;
