import React, { FC } from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import User from "../models/user";
import { Ionicons } from "@expo/vector-icons";
import { useBoolean } from "usehooks-ts";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthNavigationParams } from "../navigations/AuthNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

interface IUserCardProps {
  user: User;
}

type AuthNavigatorProps = StackNavigationProp<
  AuthNavigationParams,
  "AuthScreen"
>;

const UserCard: FC<IUserCardProps> = ({ user }) => {
  const { value, toggle, setFalse } = useBoolean(false);
  const { navigate } = useNavigation<AuthNavigatorProps>();

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <View style={styles.names}>
          <Text style={styles.fullName}>{user.fullName}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
        <TouchableOpacity onPress={toggle}>
          <Ionicons
            name={value ? "chevron-up-circle" : "chevron-down-circle"}
            size={20}
            color={"#000"}
          />
        </TouchableOpacity>
      </View>
      {value && (
        <>
          <View style={styles.button}>
            <Button
              color={"#000"}
              title={"Log In"}
              onPress={() => {
                navigate("AuthScreen");
                setFalse();
              }}
            />
          </View>
          <View style={styles.button}>
            <Button
              color={"#000"}
              title={"Settings"}
              onPress={() => {
                setFalse();
              }}
            />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 0.2,
    elevation: 5,
    margin: 10,
    padding: 7,
    borderRadius: 10,
  },
  subContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  names: {
    display: "flex",
    flexDirection: "column",
  },
  fullName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
  },
  email: {
    fontSize: 14,
    color: "#8c8b8b",
    marginTop: 2,
  },
  button: {
    borderRadius: 10,
    padding: 5,
    marginTop: 5,
  },
});

export default UserCard;
