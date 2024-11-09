import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SVGLine from "../components/Onboarding/SVGLine";

const TestingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Step 1: Welcome to our app!</Text>
      <SVGLine color="#ddd" width="80%" thickness={1} />
      <Text>Step 2: Customize your preferences</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
});

export default TestingScreen;
