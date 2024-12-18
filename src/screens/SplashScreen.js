import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/Util/CustomButton";
import { useNavigation } from "@react-navigation/native";
import * as scale from "./scale";
import SignInForm from "../components/AuthenticationForm/SignInForm";
import SignUpForm from "../components/AuthenticationForm/SignUpForm";

const SplashScreen = () => {
  const navigation = useNavigation();
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const [currentForm, setCurrentForm] = useState("default"); // 'default', 'signUp', 'signIn'

  const renderForm = () => {
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
        {renderForm()}
        {currentForm === "default" && (
          <>
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
              Ypos={"85%"}
              onPress={() => navigation.navigate("Sign up")}
            />
          </>
        )}

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

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#2C3E50",
    fontFamily: "Lato-Bold",
    fontWeight: "bold",
    top: "44%",
  },
  titleContainer: {
    flex: 1,
    marginRight: 30,
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
