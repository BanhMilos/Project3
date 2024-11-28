import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/Util/CustomButton";
import * as scale from "./scale";

const MealDetailsScreen = () => {
  const navigation = useNavigation();
  const [opacity, setOpacity] = useState(0); // Initial opacity (transparent)

  const handleScroll = (e) => {
    const offsetY = e.nativeEvent.contentOffset.y;
    const newOpacity = Math.min(offsetY / 225, 1); // Gradually increase opacity up to 1
    setOpacity(newOpacity);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.contentContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <Image
          source={require("../../assets/images/placeholder.png")}
          style={styles.recipeImage}
        />
        <Text style={styles.title}>
          No-Cook Tomato Sauce With Zucchini Ribbons and Pasta
        </Text>

        <View style={styles.tagsContainer}>
          {["Dinner", "Lunch", "Vegetarian", "Under 500 Calories"].map(
            (tag, index) => (
              <Text key={index} style={styles.tag}>
                {tag}
              </Text>
            )
          )}
        </View>

        <View style={styles.nutritionContainer}>
          {[
            "Calories: 346 cal",
            "Carbs: 46.5 g",
            "Fat: 15.6 g",
            "Protein: 9.4 g",
          ].map((item, index) => (
            <Text key={index} style={styles.nutritionText}>
              {item}
            </Text>
          ))}
        </View>

        <Text style={styles.subTitle}>Ingredients</Text>
        {[
          "- 1 pint sungold or cherry tomatoes, halved",
          "- 1/4 cup olive oil",
          "- 2 tablespoons red wine or sherry vinegar",
          "- 1 pinch kosher salt, to taste",
          "- 1/4 teaspoon crushed red pepper",
          "- 8 ounces long whole-wheat pasta",
          "- 2 small zucchinis",
        ].map((ingredient, index) => (
          <Text key={index}>{ingredient}</Text>
        ))}

        <Text style={styles.subTitle}>Directions</Text>
        {[
          "1. Combine the tomatoes, olive oil, vinegar, garlic, and crushed red pepper in a bowl...",
          "2. Using a vegetable peeler, shave zucchini into ribbons...",
          "3. Boil pasta until al dente and mix with other ingredients...",
          "4. Garnish with basil, Parmesan, and sea salt. Serve warm.",
        ].map((step, index) => (
          <Text key={index}>{step}</Text>
        ))}
      </ScrollView>

      <View style={[styles.headerWrapper, { opacity }]} />
      <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Meal Details</Text>
      <CustomButton text={"Let's start"} bgColor={"#333333"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  recipeImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  backButton: {
    position: "absolute",
    top: scale.backButtonY,
    left: scale.backButtonX,
  },
  backButtonText: {
    fontSize: 30,
    color: "#000",
  },
  headerTitle: {
    position: "absolute",
    top: scale.headerTitleY,
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  headerWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: scale.headerHeight,
    backgroundColor: "dodgerblue",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 16,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
    justifyContent: "space-evenly",
  },
  tag: {
    backgroundColor: "#f3f3f3",
    borderRadius: 12,
    padding: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  nutritionContainer: {
    marginTop: 16,
  },
  nutritionText: {
    fontSize: 14,
    color: "#555",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
  },
});

export default MealDetailsScreen;
