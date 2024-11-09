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
        source={require("../../assets/background.png")} // URL to your image
        style={styles.background}
      >
        <View style={([styles.wrapper], { top: screenHeight * 0.5 })}>
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
          style={{
            position: "absolute",
            alignSelf: "center",
          }}
        >
          <Text
            style={[
              styles.pressable,
              {
                top: screenHeight * 0.95,
                fontSize: screenWidth * (buttonTextScale - 0.005),
              },
            ]}
          >
            Already have account? Log in
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
    //backgroundColor: "green",
    flex: 1,
  },
  wrapper: {
    flex: 1,
    backgroundColor: "blue",
    alignContent: "center",
    alignItems: "center",
  },
  divider: {
    flexDirection: "row",
    justifyContent: "space-between",
    //backgroundColor: "red",
    width: "100%",
    alignItems: "center",
    marginVertical: 10,
  },
  line: {
    backgroundColor: "#333333",
    width: "20%",
    height: 1,
  },
  pressable: {
    fontWeight: "semibold",
    color: "#333333",
  },
});

export default SignUpScreen;
