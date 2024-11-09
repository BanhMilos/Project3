import { Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const CustomButton = ({
  onPress,
  text,
  textSize,
  bgColor = "dodgerblue",
  fgColor = "#FFFFFF",
  isDisabled,
  height = 50,
  width,
  Ypos,
  algs,
  pos = "relative",
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={[
        styles.button,
        {
          backgroundColor: bgColor,
          height,
          width,
          top: Ypos,
          alignSelf: algs,
          position: pos,
        },
      ]}
    >
      <Text style={[styles.text, { color: fgColor, fontSize: textSize }]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 50,
    justifyContent: "center",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    margin: 5,
  },
  text: {
    fontWeight: "bold",
    fontFamily: "Lato-Bold",
  },
});

export default CustomButton;
