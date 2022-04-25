import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import React, { FC } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useAppSelector } from "../store/hooks";
import TaskCard from "../components/TaskCard";
import { StackNavigatorProps } from "../navigations/StackNavigator";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type MainScreeProps = StackNavigationProp<StackNavigatorProps, "Main">;

const MainScreen: FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const navigation = useNavigation<MainScreeProps>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.welcome}>Welcome Back!</Text>
          <Text style={styles.today}>Here's Update Today.</Text>
        </View>
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name={"search-outline"} size={24} color={"#fff"} />
        </TouchableOpacity>
      </View>
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.currentTab}>
          <Text style={styles.currentTabText}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Task Done</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.tasksList}
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <TaskCard task={itemData.item} />}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("TaskScreen", { task: undefined })}
      >
        <Ionicons name={"add-circle-outline"} size={24} color={"#fff"} />
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  currentTab: {
    backgroundColor: "#000",
    padding: 7,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  currentTabText: {
    color: "#fff",
  },
  tasksList: {
    flex: 1,
    margin: 20,
  },
  searchButton: {
    padding: 10,
    backgroundColor: "#000",
    borderRadius: 50,
  },
  welcome: {
    margin: 10,
  },
  today: {
    margin: 10,
    marginTop: 0,
    fontSize: 18,
    fontWeight: "bold",
  },
  addButton: {
    zIndex: 1,
    position: "absolute",
    alignSelf: "center",
    bottom: 50,
    backgroundColor: "#000",
    borderRadius: 50,

    padding: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: 20,
  },
  addButtonText: {
    color: "#fff",
    marginHorizontal: 10,
  },
});

export default MainScreen;
