import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";

const Stack = createStackNavigator();

const AuthNavigator: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Main"}
      defaultScreenOptions={{ headerShown: false }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  );
};

export type AuthNavigationParams = {
  Main: undefined;
};

export default AuthNavigator;
