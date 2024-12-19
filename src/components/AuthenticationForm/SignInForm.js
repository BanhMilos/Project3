import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { auth } from "../../../firebase";
import { useNavigation } from "@react-navigation/native";

const SignInForm = ({ onBack }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const handleLogin = async () => {
    setLoading(true);
    try {
      const userCredentials = await auth.signInWithEmailAndPassword(
        email,
        password
      );
      const userUID = userCredentials.user.uid;
      console.log("User logged in: ", userCredentials.user.email);
      navigation.navigate("Home", {
        screen: "Today",
        params: { uid: userUID },
      });
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  };

  return (
    <View style={styles.formContainer}>
      {loading && (
        <ActivityIndicator
          style={{
            top: "50%",
            alignSelf: "center",
            position: "absolute",
            zIndex: 2,
          }}
          size={"large"}
        />
      )}
      <Pressable style={styles.backButton} onPress={() => onBack()}>
        <Ionicons name="arrow-back" size={25} color="#333333" />
      </Pressable>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome Back</Text>
        <Text style={styles.headerSubtitle}>Please log in to continue</Text>
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

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333333",
    borderRadius: 10,
    alignSelf: "center",
    width: "100%",
    height: 50,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#ffffff",
  },
});

export default SignInForm;
