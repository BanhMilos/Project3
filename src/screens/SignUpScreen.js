import React from "react";
import CustomButton from "../components/Util/CustomButton";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";

const SignUpScreen = () => {
  const screenHeight = Dimensions.get("window").height;
  const screenWidth = Dimensions.get("window").width;
  const titleSizeScale = 0.12;
  const titleYScale = 0.41;
  const subtitleSizeScale = titleSizeScale - 0.06;
  const subtitleYScale = titleYScale + 0.01;
  const buttonTextScale = subtitleSizeScale - 0.015;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.background}
      >
        <View style={styles.wrapper}>
          <CustomButton
            text={"Sign up with email"}
            bgColor={"#FF6F61"}
            height={screenHeight * 0.07}
            width={screenWidth * 0.7}
            algs={"center"}
            textSize={screenWidth * buttonTextScale}
          />

          <View style={styles.divider}>
            <View style={styles.line} />
            <Text>or use social sign up</Text>
            <View style={styles.line} />
          </View>

          <CustomButton
            text={"Continue with Google"}
            bgColor={"#FFFFFF"}
            fgColor={"#4F4F4F"}
            height={screenHeight * 0.07}
            width={screenWidth * 0.7}
            algs={"center"}
            textSize={screenWidth * buttonTextScale}
          />

          <CustomButton
            text={"Continue with Facebook"}
            bgColor={"#FFFFFF"}
            fgColor={"#3F5D95"}
            height={screenHeight * 0.07}
            width={screenWidth * 0.7}
            algs={"center"}
            textSize={screenWidth * buttonTextScale}
          />
        </View>

        <Pressable
          style={styles.pressableContainer}
          onPress={() => console.log("Navigate to login screen")} // Add navigation logic here
        >
          <Text
            style={[
              styles.pressable,
              {
                fontSize: screenWidth * (buttonTextScale - 0.005),
              },
            ]}
          >
            Already have an account? Log in
          </Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: "center", // This ensures that the buttons are vertically centered
    alignItems: "center",
    paddingHorizontal: 20, // Ensure there is some padding from the sides
  },
  divider: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  line: {
    backgroundColor: "#333333",
    width: "20%",
    height: 1,
  },
  pressableContainer: {
    position: "absolute",
    alignSelf: "center",
    bottom: 20, // Position it at the bottom of the screen
  },
  pressable: {
    fontWeight: "semibold",
    color: "#333333",
  },
});

export default SignUpScreen;
