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
import { auth, db } from "../../firebase";

const SignUpForm = ({ onBack }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    setLoading(true);
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      setLoading(false);
      return;
    }
    try {
      const userCredentials = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const user = userCredentials.user;

      await db.collection("User").doc(user.uid).set({
        allergic: [],
        currentPlan: "",
        gender: 0,
        goal: 0,
      });

      await db
        .collection("User")
        .doc(user.uid)
        .collection("Meals")
        .doc("init")
        .set({ initialized: true });
      await db
        .collection("User")
        .doc(user.uid)
        .collection("WeeklyProgress")
        .doc("init")
        .set({ initialized: true });

      console.log("User signed up successfully");
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  };

  return (
    <View style={styles.formContainer}>
      {loading && (
        <ActivityIndicator size="large" style={styles.loadingIndicator} />
      )}
      <Pressable style={styles.backButton} onPress={onBack}>
        <Ionicons name="arrow-back" size={25} color="#333333" />
      </Pressable>
      <Text style={styles.header}>Sign Up</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={styles.input}
      />
      <Pressable style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: { padding: 20 },
  backButton: { marginBottom: 10 },
  header: { fontSize: 20, marginBottom: 10 },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#333",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: { color: "#fff" },
  loadingIndicator: { marginVertical: 20 },
});

export default SignUpForm;
