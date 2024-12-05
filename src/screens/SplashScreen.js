import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import CustomButton from "../components/Util/CustomButton";
import { useNavigation } from "@react-navigation/native";
import * as scale from "./scale";

const SplashScreen = () => {
  const navigation = useNavigation();
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={styles.background}
      >
        {isLoginFormVisible ? (
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
          onPress={() => console.log("pressing")}
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
