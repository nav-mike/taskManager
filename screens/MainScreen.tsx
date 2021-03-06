import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  TextInput,
} from "react-native";
import React, { FC, useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useAppSelector } from "../store/hooks";
import TaskCard from "../components/TaskCard";
import { StackNavigatorProps } from "../navigations/StackNavigator";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { equalsDates, moreThanDate } from "../utils/datesCompares";
import Task from "../models/task";
import { useBoolean } from "usehooks-ts";
import Fuse from "fuse.js";

export type MainScreenProps = StackNavigationProp<StackNavigatorProps, "Main">;
type Props = StackScreenProps<StackNavigatorProps, "Main">;

const filterForToday = (task: Task) =>
  !task.done && equalsDates(new Date(), task?.deadline);

const filterForUpcoming = (task: Task) =>
  moreThanDate(new Date(), task?.deadline) && !task.done;

const filterForDone = (task: Task) => task.done;

const filterByTag = (tag: string) => (task: Task) =>
  task.tags?.includes(tag) || false;

const filterByMode: (mode: string) => (task: Task) => boolean = (mode) => {
  switch (mode) {
    case "today":
      return filterForToday;
    case "upcoming":
      return filterForUpcoming;
    case "done":
      return filterForDone;
    default:
      return filterByTag(mode);
  }
};

const filterBySearch = (searchValue: string) => (task: Task) => {
  return (
    task.title.includes(searchValue) ||
    task.description?.includes(searchValue) ||
    task.tags?.includes(searchValue) ||
    false
  );
};

const MainScreen: FC = () => {
  const navigation = useNavigation<MainScreenProps>();
  const route = useRoute<Props["route"]>();
  const filter = route.params?.filter;

  const [filterMode, setFilterMode] = useState<string>("today");
  const [search, setSearch] = useState<string>("");
  const {
    value: isShowSearch,
    setTrue: showSearch,
    setFalse: hideSearch,
  } = useBoolean(false);

  useEffect(() => {
    if (filter) {
      setFilterMode(filter);
    }
  }, [filter]);

  let tasks = useAppSelector((state) => state.tasks.tasks);

  tasks =
    filterMode !== "search"
      ? tasks.filter(filterByMode(filterMode))
      : tasks.filter(filterBySearch(search));

  const searchHandler = () => {
    hideSearch();
    setFilterMode("search");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {!isShowSearch && (
          <>
            <View>
              <Text style={styles.welcome}>Welcome Back!</Text>
              <Text style={styles.today}>Here's Update Today.</Text>
            </View>
            <TouchableOpacity onPress={showSearch} style={styles.searchButton}>
              <Ionicons name={"search-outline"} size={24} color={"#fff"} />
            </TouchableOpacity>
          </>
        )}
        {isShowSearch && (
          <View style={styles.searchForm}>
            <Ionicons name={"search-outline"} size={24} color={"#000"} />
            <TextInput
              onSubmitEditing={searchHandler}
              placeholder={"Type your search here"}
              autoFocus={isShowSearch}
              style={styles.searchInput}
              onChangeText={setSearch}
            />
          </View>
        )}
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity
          style={filterMode === "today" && styles.currentTab}
          onPress={() => setFilterMode("today")}
        >
          <Text style={filterMode === "today" && styles.currentTabText}>
            Today
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={filterMode === "upcoming" && styles.currentTab}
          onPress={() => setFilterMode("upcoming")}
        >
          <Text style={filterMode === "upcoming" && styles.currentTabText}>
            Upcoming
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={filterMode === "done" && styles.currentTab}
          onPress={() => setFilterMode("done")}
        >
          <Text style={filterMode === "done" && styles.currentTabText}>
            Task Done
          </Text>
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
        onPress={() =>
          navigation.navigate("TaskScreen", { task_id: undefined })
        }
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
    padding: 20,
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
  searchForm: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#f5f7fb",
    flex: 1,
    borderRadius: 20,
  },
  searchInput: {
    marginLeft: 10,
  },
});

export default MainScreen;
