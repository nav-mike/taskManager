import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";

const Stack = createStackNavigator<StackNavigatorProps>();

const StackNavigator: FC = () => {
  return (
    <Stack.Navigator defaultScreenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export type StackNavigatorProps = {
  Main: undefined;
};

export default StackNavigator;
