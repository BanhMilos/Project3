import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";
import CustomButton from "../components/Util/CustomButton";
import { Ionicons } from "react-native-vector-icons";
import * as scale from "./scale";

const SignUpScreen = () => {
  const screenHeight = Dimensions.get("window").height;
  const screenWidth = Dimensions.get("window").width;
  const buttonTextScale = 0.045;
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignUpFormVisible, setIsSignUpFormVisible] = useState(false);
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("User created: ", user.email);
        alert("Account created successfully!");
        navigation.navigate("Onboarding");
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("User logged in: ", user.email);
        alert("Logged in successfully!");
        navigation.navigate("Onboarding");
      })
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Onboarding");
      }
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={styles.background}
      >
        <View style={styles.wrapper}>
          {isSignUpFormVisible ? (
            <View style={styles.formContainer}>
              <Pressable
                style={styles.backButton}
                onPress={() => setIsSignUpFormVisible(false)}
              >
                <Ionicons name="arrow-back" size={25} color="#333333" />
              </Pressable>

              <View style={styles.header}>
                <Text style={styles.headerTitle}>Let's get started</Text>
                <Text style={styles.headerSubtitle}>
                  Fill the form to continue
                </Text>
              </View>

              <Text style={styles.inputLabel}>Your email address</Text>
              <TextInput
                placeholder="abcxyz@gmail.com"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
              />

              <Text style={styles.inputLabel}>Your password</Text>
              <TextInput
                placeholder="min 8 characters"
                style={styles.input}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />

              <Text style={styles.inputLabel}>Confirm your password</Text>
              <TextInput
                placeholder="confirm password"
                style={styles.input}
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />

              <Pressable style={styles.signUpButton} onPress={handleSignUp}>
                <Text style={styles.signUpButtonText}>Sign up</Text>
              </Pressable>
            </View>
          ) : isLoginFormVisible ? (
            <View style={styles.formContainer}>
              <Pressable
                style={styles.backButton}
                onPress={() => setIsLoginFormVisible(false)}
              >
                <Ionicons name="arrow-back" size={25} color="#333333" />
              </Pressable>

              <View style={styles.header}>
                <Text style={styles.headerTitle}>Welcome Back</Text>
                <Text style={styles.headerSubtitle}>
                  Please log in to continue
                </Text>
              </View>

              <Text style={styles.inputLabel}>Your email address</Text>
              <TextInput
                placeholder="abcxyz@gmail.com"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
              />

              <Text style={styles.inputLabel}>Your password</Text>
              <TextInput
                placeholder="min 8 characters"
                style={styles.input}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />

              <Pressable style={styles.signUpButton} onPress={handleLogin}>
                <Text style={styles.signUpButtonText}>Log in</Text>
              </Pressable>
            </View>
          ) : (
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
          )}
        </View>

        <Pressable
          style={styles.pressableContainer}
          onPress={() => setIsLoginFormVisible(true)}
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
