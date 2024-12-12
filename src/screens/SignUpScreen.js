import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  Dimensions,
} from "react-native";
import SignUpForm from "../components/AuthenticationForm/SignUpForm";
import SignInForm from "../components/AuthenticationForm/SignInForm";
import CustomButton from "../components/Util/CustomButton";
import * as scale from "./scale";

const SignUpScreen = () => {
  const screenHeight = Dimensions.get("window").height;
  const screenWidth = Dimensions.get("window").width;
  const buttonTextScale = 0.045;
  const [currentForm, setCurrentForm] = useState("default"); // 'default', 'signUp', 'signIn'

  const renderForm = () => {
    if (currentForm === "signUp") {
      return <SignUpForm onBack={() => setCurrentForm("default")} />;
    }
    if (currentForm === "signIn") {
      return <SignInForm onBack={() => setCurrentForm("default")} />;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={styles.background}
      >
        <View style={styles.wrapper}>
          {renderForm()}

          {currentForm === "default" && (
            <>
              <CustomButton
                text="Sign up with email"
                bgColor="#FF6F61"
                textSize={screenWidth * buttonTextScale}
                Ypos={screenHeight * 0.395}
                onPress={() => setCurrentForm("signUp")}
              />

              <View style={styles.divider}>
                <View style={styles.line} />
                <Text>or use social sign up</Text>
                <View style={styles.line} />
              </View>

              <CustomButton
                text="Continue with Google"
                bgColor="#FFFFFF"
                fgColor="#4F4F4F"
                Ypos={screenHeight * 0.54}
                textSize={screenWidth * buttonTextScale}
              />

              <CustomButton
                text="Continue with Facebook"
                bgColor="#FFFFFF"
                fgColor="#3F5D95"
                Ypos={screenHeight * 0.625}
                textSize={screenWidth * buttonTextScale}
              />
            </>
          )}
        </View>

        <Pressable
          style={styles.pressableContainer}
          onPress={() => setCurrentForm("signIn")}
        >
          <Text style={[styles.pressable, { fontSize: scale.textSize - 1 }]}>
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
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
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
    bottom: 20,
  },
  pressable: {
    fontWeight: "600",
    color: "#333333",
  },
});

export default SignUpScreen;
