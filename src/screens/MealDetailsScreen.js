import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const MealDetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Recipe Image */}
      <Image
        source={{ uri: "https://your-image-url.com" }} // Replace with your image URL
        style={styles.recipeImage}
      />

      {/* Recipe Title */}
      <Text style={styles.title}>
        No-Cook Tomato Sauce With Zucchini Ribbons and Pasta
      </Text>

      {/* Tags */}
      <View style={styles.tagsContainer}>
        <Text style={styles.tag}>Dinner</Text>
        <Text style={styles.tag}>Lunch</Text>
        <Text style={styles.tag}>Vegetarian</Text>
        <Text style={styles.tag}>Under 500 Calories</Text>
      </View>

      {/* Nutrition */}
      <View style={styles.nutritionContainer}>
        <Text style={styles.nutritionText}>Calories: 346 cal</Text>
        <Text style={styles.nutritionText}>Carbs: 46.5 g</Text>
        <Text style={styles.nutritionText}>Fat: 15.6 g</Text>
        <Text style={styles.nutritionText}>Protein: 9.4 g</Text>
      </View>

      {/* Ingredients */}
      <Text style={styles.subTitle}>Ingredients</Text>
      <Text>- 1 pint sungold or cherry tomatoes, halved</Text>
      <Text>- 1/4 cup olive oil</Text>
      <Text>- 2 tablespoons red wine or sherry vinegar</Text>
      <Text>- 1 pinch kosher salt, to taste</Text>
      <Text>- 1/4 teaspoon crushed red pepper</Text>
      <Text>- 8 ounces long whole-wheat pasta</Text>
      <Text>- 2 small zucchinis</Text>

      {/* Directions */}
      <Text style={styles.subTitle}>Directions</Text>
      <Text>
        1. Combine the tomatoes, olive oil, vinegar, garlic, and crushed red
        pepper in a bowl...
      </Text>
      <Text>2. Using a vegetable peeler, shave zucchini into ribbons...</Text>
      <Text>
        3. Boil pasta until al dente and mix with other ingredients...
      </Text>
      <Text>4. Garnish with basil, Parmesan, and sea salt. Serve warm.</Text>

      {/* Log to Diary Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log to Diary</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  recipeImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
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
  },
  tag: {
    backgroundColor: "#f3f3f3",
    borderRadius: 12,
    padding: 8,
    marginRight: 8,
    marginBottom: 8,
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
  button: {
    backgroundColor: "#1e90ff",
    borderRadius: 8,
    padding: 12,
    marginTop: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MealDetailsScreen;
