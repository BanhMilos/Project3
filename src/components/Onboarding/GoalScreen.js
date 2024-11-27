import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import * as scale from "../../screens/scale";
import CustomButton from "../Util/CustomButton";
import { useNavigation } from "@react-navigation/native";

const GoalScreen = () => {
  const [selectedGoal, setSelectedGoal] = useState(null);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontSize: scale.titleSize - 13 }]}>
        What is your main goal?
      </Text>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/placeholder.png")}
        />
        <Text style={[styles.text, { fontSize: scale.textSize }]}>
          Your goal shapes what you eat. We'll make the best mix of food to help
          you achieve!
        </Text>
      </View>
      <View style={styles.cardWrapper}>
        <TouchableOpacity
          style={[
            styles.cardGoal,
            selectedGoal === "Lose Weight"
              ? styles.selectedCard
              : styles.unselectedCard,
          ]}
          onPress={() => setSelectedGoal("Lose Weight")}
        >
          <Text
            style={[
              styles.goal,
              { fontSize: scale.textSize + 6 },
              selectedGoal === "Lose Weight"
                ? styles.selectedText
                : styles.unselectedText,
            ]}
          >
            Lose Weight
          </Text>
          <Image
            source={require("../../../assets/images/male.png")}
            style={styles.image}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.cardGoal,
            selectedGoal === "Gain Weight"
              ? styles.selectedCard
              : styles.unselectedCard,
          ]}
          onPress={() => setSelectedGoal("Gain Weight")}
        >
          <Text
            style={[
              styles.goal,
              { fontSize: scale.textSize + 6 },
              selectedGoal === "Gain Weight"
                ? styles.selectedText
                : styles.unselectedText,
            ]}
          >
            Gain Weight
          </Text>
          <Image
            source={require("../../../assets/images/female.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.cardGoal,
            selectedGoal === "Keep Fit"
              ? styles.selectedCard
              : styles.unselectedCard,
          ]}
          onPress={() => setSelectedGoal("Keep Fit")}
        >
          <Text
            style={[
              styles.goal,
              { fontSize: scale.textSize + 6 },
              selectedGoal === "Keep Fit"
                ? styles.selectedText
                : styles.unselectedText,
            ]}
          >
            Keep Fit
          </Text>
          <Image
            source={require("../../../assets/images/male.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>

      {selectedGoal && (
        <CustomButton
          text={"Next"}
          bgColor={"#333333"}
          Ypos={scale.buttonYPos}
          width={scale.buttonWidth}
          height={scale.buttonHeight}
          algs={"center"}
          textSize={scale.buttonTextSize}
          pos={"absolute"}
          onPress={() => navigation.navigate("Home")}
        />
      )}
    </View>
  );
};

export default GoalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
    width: "100%",
  },
  title: {
    color: "#2C3E50",
    fontFamily: "Lato-Bold",
    fontWeight: "bold",
    marginBottom: 90,
    top: "10%",
    marginLeft: 30,
    marginRight: 100,
  },
  card: {
    flexDirection: "row",
    paddingRight: 20,
    paddingVertical: 20,
    backgroundColor: "#E4EEF4",
    marginHorizontal: 30,
    marginVertical: 30,
    borderRadius: 10,
  },
  cardWrapper: {
    marginHorizontal: 10,
    flex: 0.78,
  },
  cardGoal: {
    flexDirection: "row",
    flex: 1,
    margin: 5,
    borderRadius: 15,
    borderWidth: 2,
  },
  other: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 7,
    paddingHorizontal: 5,
    borderRadius: 15,
    width: "60%",
    alignSelf: "center",
    borderWidth: 1.5,
  },

  unselectedCard: {
    backgroundColor: "#FFFFFF",
    borderColor: "#FAF9F6",
  },
  selectedCard: {
    backgroundColor: "#F5F5F5",
    borderColor: "#0A85FF",
  },
  goal: {
    alignSelf: "center",
    fontWeight: "600",
    flex: 1,
    marginLeft: 20,
  },
  selectedText: {
    color: "#1E90FF",
    fontWeight: "600",
  },
  unselectedText: {
    color: "#000000",
    fontWeight: "600",
  },
  image: {
    width: null,
    height: "100%",
    flex: 1,
  },
  text: {
    flex: 4,
    color: "#333333",
  },
});
