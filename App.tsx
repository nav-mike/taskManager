import { Provider } from "react-redux";
import { store } from "./store/reducer";
import AuthNavigator from "./navigations/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}
