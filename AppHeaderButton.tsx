import React, { FC } from "react";
import {
  HeaderButton,
  HeaderButtonProps,
} from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "./constants/colors";

const AppHeaderButton: FC<HeaderButtonProps> = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Colors.secondary}
    />
  );
};

export default AppHeaderButton;
