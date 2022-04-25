import React, { FC, useLayoutEffect, useState } from "react";
import {
  Button,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Color from "../models/color";
import { useBoolean } from "usehooks-ts";
import ColorCircle from "../components/ColorCircle";
import { Ionicons } from "@expo/vector-icons";
import CalendarPicker from "react-native-calendar-picker";
import DateTimePicker, { Event } from "@react-native-community/datetimepicker";
import { TaskTypeEnum } from "../models/type";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { StackNavigatorProps } from "../navigations/StackNavigator";

type Props = StackScreenProps<StackNavigatorProps, "TaskScreen">;
type TaskScreeProps = StackNavigationProp<StackNavigatorProps, "TaskScreen">;

const TaskScreen: FC = () => {
  const { value: isShowColorPicker, toggle: toggleColorPicker } =
    useBoolean(false);
  const { value: isShowDatePicker, toggle: toggleDatePicker } =
    useBoolean(false);
  const [color, setColor] = useState(Color.Yellow);
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<Date>(new Date());
  const [type, setType] = useState("Basic");
  const route = useRoute<Props["route"]>();
  const navigation = useNavigation<TaskScreeProps>();
  const { task_id } = route.params;

  useLayoutEffect(() => {
    if (task_id) {
      navigation.setOptions({ headerTitle: "task.title" });
    }
  }, []);

  const onPickColor = (color: Color) => {
    setColor(color);
    toggleColorPicker();
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <KeyboardAvoidingView behavior={"height"} style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <View style={styles.formFields}>
            <Text style={styles.label}>My New Task</Text>
            <View style={{ ...styles.nameColorFields, ...styles.bottomBorder }}>
              <TextInput
                style={styles.textInput}
                multiline={true}
                placeholder={"What do you need to do?"}
                value={"Meetings With Client About UI / UX Designer"}
              />
              <ColorCircle color={color} onPress={toggleColorPicker} />
            </View>
            {isShowColorPicker && (
              <View style={styles.complexInput}>
                <ColorCircle
                  color={Color.Yellow}
                  onPress={() => {
                    onPickColor(Color.Yellow);
                  }}
                />
                <ColorCircle
                  color={Color.LightGreen}
                  onPress={() => {
                    onPickColor(Color.LightGreen);
                  }}
                />
                <ColorCircle
                  color={Color.LightBlue}
                  onPress={() => {
                    onPickColor(Color.LightBlue);
                  }}
                />
                <ColorCircle
                  color={Color.LightPurple}
                  onPress={() => {
                    onPickColor(Color.LightPurple);
                  }}
                />
                <ColorCircle
                  color={Color.Red}
                  onPress={() => {
                    onPickColor(Color.Red);
                  }}
                />
                <ColorCircle
                  color={Color.Blue}
                  onPress={() => {
                    onPickColor(Color.Blue);
                  }}
                />
                <ColorCircle
                  color={Color.Purple}
                  onPress={() => {
                    onPickColor(Color.Purple);
                  }}
                />
              </View>
            )}
          </View>
          <View style={styles.formFields}>
            <Text style={styles.label}>Description</Text>
            <View>
              <TextInput
                style={{ ...styles.textInput, ...styles.bottomBorder }}
                multiline={true}
                placeholder={"What do you need to do?"}
              />
            </View>
          </View>
          <View style={styles.formFields}>
            <Text style={styles.label}>Deadline</Text>
            <View style={{ ...styles.complexInput, ...styles.bottomBorder }}>
              <TextInput style={styles.textInput} value={date} />
              <TouchableOpacity onPress={toggleDatePicker}>
                <Ionicons name={"calendar-outline"} size={24} color={"#000"} />
              </TouchableOpacity>
              {isShowDatePicker && (
                <CalendarPicker
                  onDateChange={(date) => {
                    setDate(date.format("DD MMMM YYYY"));
                    toggleDatePicker();
                  }}
                />
              )}
            </View>
          </View>
          <View style={styles.formFields}>
            <Text style={styles.label}>Remind me at</Text>
            <View>
              <DateTimePicker
                style={styles.textInput}
                value={time}
                mode={"time"}
                is24Hour={true}
                onChange={(_: Event, date?: Date) => {
                  if (date) setTime(date);
                }}
              />
            </View>
          </View>
          <View style={styles.formFields}>
            <Text style={styles.label}>Place</Text>
            <View>
              <TextInput
                style={{ ...styles.textInput, ...styles.bottomBorder }}
                placeholder={"Specify the place if need it"}
              />
            </View>
          </View>
          <View style={styles.formFields}>
            <Text style={styles.label}>Task type</Text>
            <View
              style={{
                ...styles.complexInput,
                ...styles.bottomBorder,
                justifyContent: "space-between",
              }}
            >
              {Object.entries(TaskTypeEnum)
                .filter(([key, _]) => key.toString() !== "0" && !parseInt(key))
                .map(([key, value]) => {
                  const isActive = type.toString() === TaskTypeEnum[+value];
                  return (
                    <TouchableOpacity
                      key={key}
                      style={
                        isActive
                          ? { ...styles.toggler, ...styles.activeToggler }
                          : { ...styles.toggler }
                      }
                      onPress={() => {
                        setType(TaskTypeEnum[+value]);
                      }}
                    >
                      <Text
                        style={
                          isActive
                            ? {
                                ...styles.togglerText,
                                ...styles.activeTogglerText,
                              }
                            : { ...styles.togglerText }
                        }
                      >
                        {key}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
            </View>
          </View>
          <View style={styles.formFields}>
            <Text style={styles.label}>Tags</Text>
            <View>
              <TextInput
                multiline={true}
                style={{ ...styles.textInput, ...styles.bottomBorder }}
                placeholder={"Define list of tags using ',' as a separator"}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.buttonView}>
        <Button title={"Save Task"} onPress={() => {}} color={"#fff"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "#989696",
    marginBottom: 10,
  },
  bottomBorder: {
    borderBottomColor: "#cbc9c9",
    borderBottomWidth: 2,
  },
  textInput: {
    paddingBottom: 10,
    fontWeight: "bold",
    fontSize: 18,
    flex: 1,
  },
  complexInput: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginVertical: 10,
  },
  nameColorFields: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  formFields: {
    marginBottom: 10,
  },
  container: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 20,
  },
  toggler: {
    padding: 10,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 20,
    flex: 1,
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  activeToggler: {
    backgroundColor: "#000",
  },
  togglerText: {
    color: "#000",
  },
  activeTogglerText: {
    color: "#fff",
  },
  buttonView: {
    backgroundColor: "#000",
    padding: 5,
    borderRadius: 30,
    marginVertical: 30,
    marginHorizontal: 20,
  },
});

export default TaskScreen;
