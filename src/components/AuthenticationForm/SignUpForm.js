import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../context/UserContext";
import { getFirestore, doc, setDoc, collection } from "firebase/firestore";

const SignUpForm = ({ onBack }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUserUID } = useContext(UserContext);
  const navigation = useNavigation();
  const handleSignUp = async () => {
    setLoading(true);
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      setLoading(false);
      return;
    }
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        getAuth(),
        email,
        password
      );
      const user = userCredentials.user;

      const db = getFirestore();
      await setDoc(doc(db, "User", user.uid), {
        allergic: [],
        currentPlan: "",
        gender: 0,
        goal: 0,
      });

      await setDoc(doc(collection(db, "User", user.uid, "Meals"), "init"), {
        initialized: true,
      });
      await setDoc(
        doc(collection(db, "User", user.uid, "DailyProgress"), "init"),
        { initialized: true }
      );
      console.log("User signed up successfully");
      setUserUID(user.uid);
      navigation.navigate("Allergic");
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
      <Pressable style={styles.backButton} onPress={() => onBack()}>
        <Ionicons name="arrow-back" size={25} color="#333333" />
      </Pressable>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Let's get started</Text>
        <Text style={styles.headerSubtitle}>Fill the form to continue</Text>
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

      <Pressable style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign up</Text>
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

export default SignUpForm;
