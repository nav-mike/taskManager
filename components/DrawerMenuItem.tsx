import React, { FC } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

interface IDrawerMenuItemProps {
  title: string;
  icon: any;
  onPress: () => void;
}

const DrawerMenuItemProps: FC<IDrawerMenuItemProps> = ({
  title,
  icon,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.icon}>
        <Ionicons name={icon} size={20} color="white" />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    padding: 7,
  },
  icon: {
    backgroundColor: "#000",
    borderRadius: 50,
    padding: 7,
  },
  text: {
    marginLeft: 10,
  },
});

export default DrawerMenuItemProps;
