import React, { FC } from "react";
import Task from "../models/task";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DateTime } from "luxon";
import { useNavigation } from "@react-navigation/native";
import { MainScreeProps } from "../screens/MainScreen";

interface ITaskCardProps {
  task: Task;
}

const TaskCard: FC<ITaskCardProps> = (props) => {
  const navigation = useNavigation<MainScreeProps>();

  const goToEditHandler = () => {
    navigation.navigate("TaskScreen", { task_id: props.task.id });
  };

  const cardStyle = {
    ...styles.card,
    backgroundColor: props.task.color,
  };
  return (
    <View style={cardStyle}>
      <View style={styles.cardHeader}>
        <View style={styles.tags}>
          {props.task.tags?.map((item, index) => (
            <Text key={index} style={styles.tag}>
              {item}
            </Text>
          ))}
        </View>
        <TouchableOpacity onPress={goToEditHandler}>
          <Ionicons name={"create-outline"} size={17} color={"#000"} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{props.task.title}</Text>
      <View style={styles.cardFooter}>
        <View>
          <View style={styles.dateRow}>
            <Ionicons name={"calendar-outline"} size={17} color={"#000"} />
            <Text style={styles.date}>
              {props.task.deadline
                ? DateTime.fromJSDate(props.task.deadline).toFormat(
                    "d LLLL yyyy"
                  )
                : ""}
            </Text>
          </View>
          <View style={styles.dateRow}>
            <Ionicons name={"time-outline"} size={17} color={"#000"} />
            <Text style={styles.date}>
              {props.task.deadline
                ? DateTime.fromJSDate(props.task.deadline).toFormat("HH:mm")
                : ""}{" "}
              {props.task.remindAt
                ? `(Remind At ${DateTime.fromJSDate(
                    props.task.remindAt
                  ).toFormat("HH:mm")})`
                : ""}
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <Ionicons
            name={
              props.task.done ? "checkmark-circle-outline" : "ellipse-outline"
            }
            size={27}
            color={"#000"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  tags: {
    flexDirection: "row",
  },
  tag: {
    marginHorizontal: 5,
    padding: 5,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#afadad",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 20,
  },
  date: {
    margin: 5,
  },
  dateRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default TaskCard;
