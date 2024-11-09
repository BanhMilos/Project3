import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import CustomButton from "../components/Util/CustomButton";
import * as scale from "./scale";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.background}
      >
        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { fontSize: scale.titleSize }]}>
            Personalized
          </Text>
          <Text style={[styles.title, { fontSize: scale.titleSize }]}>
            Plan
          </Text>
          <Text style={[styles.title, { fontSize: scale.subtitleSize }]}>
            ADAPT TO YOUR NEEDS
          </Text>
        </View>

        <CustomButton
          text="START"
          bgColor="#FF6F61"
          Ypos="85%"
          width={scale.buttonWidth}
          height={scale.buttonHeight}
          algs="center"
          textSize={scale.buttonTextSize}
          pos="absolute"
        />

        <Pressable style={styles.pressableContainer}>
          <Text style={[styles.pressable, { fontSize: scale.textSize - 1 }]}>
            Already have an account? Log in
          </Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: "100%",
    height: "100%",
  },
  title: {
    color: "#2C3E50",
    fontFamily: "Lato-Bold",
    marginLeft: 30,
    fontWeight: "bold",
    top: "44%",
  },
  titleContainer: {
    flex: 1,
  },
  pressableContainer: {
    position: "absolute",
    alignSelf: "center",
    top: "95%",
  },
  pressable: {
    fontWeight: "semibold",
    color: "#333333",
  },
});
