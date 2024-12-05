import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import SignUpForm from "../components/AuthenticationForm/SignUpForm";
import SignInForm from "../components/AuthenticationForm/SignInForm";

const SignUpScreen = () => {
  const [currentForm, setCurrentForm] = useState("default");

  const renderForm = () => {
    if (currentForm === "signUp") {
      return <SignUpForm onBack={() => setCurrentForm("default")} />;
    } else if (currentForm === "signIn") {
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
        {loading && (
          <ActivityIndicator
            style={{
              top: Dimensions.get("screen").height / 2.5,
              alignSelf: "center",
              position: "absolute",
              zIndex: 2,
            }}
            size={"large"}
          />
        )}

        <View style={styles.wrapper}>
          {renderForm()}
          {
            <>
              <CustomButton
                text="Sign up with email"
                bgColor="#FF6F61"
                textSize={screenWidth * buttonTextScale}
                Ypos={screenHeight * 0.395}
                onPress={() => setIsSignUpFormVisible(true)}
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
          }
        </View>

        <Pressable
          style={styles.pressableContainer}
          onPress={() => {
            setIsLoginFormVisible(true);
            setIsSignUpFormVisible(false);
          }}
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
    top: "95%",
  },
  pressable: {
    fontWeight: "semibold",
    color: "#333333",
  },
  formContainer: {
    width: "85%",
    backgroundColor: "#FAF9F6",
    paddingHorizontal: 25,
    paddingTop: 40,
    paddingBottom: 30,
    borderRadius: 10,
    marginBottom: 20,
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
  },
  header: {
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  headerSubtitle: {
    fontSize: 13,
    color: "#B5B5B5",
  },
  inputLabel: {
    fontSize: 13,
    marginTop: 5,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#CCC",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: "#FFF",
  },
  signUpButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333333",
    borderRadius: 10,
    alignSelf: "center",
    width: "100%",
    height: 50,
    marginTop: 20,
  },
  signUpButtonText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#ffffff",
  },
});

export default SignUpScreen;
