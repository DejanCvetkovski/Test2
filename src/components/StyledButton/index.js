import React from "react";
import { View, Pressable, Alert, Text } from "react-native";
import styles from "./style";

const StyledButton = ({ type, title, onPress }) => {
  const background = type === "primary" ? "#333" : "white";
  const textColor = type === "primary" ? "white" : "#333";

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => onPress()}
        style={[styles.button, { backgroundColor: background }]}
      >
        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
