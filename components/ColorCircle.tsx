import React, { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const ColorCircle: FC<{ color: string; onPress: () => void }> = (props) => {
  return (
    <TouchableOpacity
      style={{ ...styles.colorSelector, backgroundColor: props.color }}
      onPress={props.onPress}
    />
  );
};

const styles = StyleSheet.create({
  colorSelector: {
    width: 20,
    height: 20,
    borderRadius: 25,
  },
});

export default ColorCircle;
