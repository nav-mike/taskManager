import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";
import TaskScreen from "../screens/TaskScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import AppHeaderButton from "../components/AppHeaderButton";
import Task from "../models/task";

const Stack = createStackNavigator<StackNavigatorProps>();

const StackNavigator: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
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
      <Stack.Screen
        name={"TaskScreen"}
        component={TaskScreen}
        options={(props) => {
          return {
            headerTitle: "New Task",
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

export type StackNavigatorProps = {
  Main: undefined;
  TaskScreen: {
    task_id?: string;
  };
};

export default StackNavigator;
