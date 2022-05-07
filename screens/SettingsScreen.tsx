import { FC } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
// @ts-ignore
import avatar from "../assets/avatar.jpg";

const SettingsScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <TouchableOpacity>
        <Image source={avatar} style={styles.avatar} />
      </TouchableOpacity>
      <TextInput style={styles.input} placeholder="Enter your full name" />
      <TextInput style={styles.input} placeholder="Enter your email" />
      <Text style={styles.infoText}>
        Use inputs below to change your password
      </Text>
      <TextInput style={styles.input} placeholder="Enter your old password" />
      <TextInput style={styles.input} placeholder="Enter your new password" />
      <TextInput style={styles.input} placeholder="Confirm your new password" />
      <View style={styles.button}>
        <Button title={"Save"} onPress={() => {}} color={"#000"} />
      </View>
      <View style={styles.button}>
        <Button title={"Cancel"} onPress={() => {}} color={"#000"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderBottomColor: "#cbc9c9",
    borderBottomWidth: 2,
    paddingVertical: 7,
    fontWeight: "bold",
    fontSize: 16,
    width: "80%",
    marginVertical: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  infoText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
});

export default SettingsScreen;
