import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import * as scale from "../../screens/scale";

const CustomButton = ({
  onPress = () => console.log(`${text || "Button"} pressed`),
  text = "Button",
  textSize = scale.subtitleSize,
  bgColor = "dodgerblue",
  fgColor = "#FFFFFF",
  isDisabled = false,
  height = scale.buttonHeight,
  width = scale.buttonWidth,
  Ypos = scale.buttonYPos,
  algs = "center",
  pos = "absolute",
  borderRadius = 0,
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
          borderRadius,
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
    justifyContent: "center",
    borderRadius: 50,
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
