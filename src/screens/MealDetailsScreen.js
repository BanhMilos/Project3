import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import CustomButton from "../components/Util/CustomButton";
import * as scale from "./scale";
import DognutChart from "../components/Util/DognutChart";
import { UserContext } from "../context/UserContext";
import { getDoc, doc, getFirestore } from "firebase/firestore";

const MealDetailsScreen = ({ navigation, route }) => {
  const { recipeId } = route.params;
  const { userUID } = useContext(UserContext);
  const [opacity, setOpacity] = useState(0);
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const handleScroll = (e) => {
    const offsetY = e.nativeEvent.contentOffset.y;
    const newOpacity = Math.min(offsetY / 225, 1);
    setOpacity(newOpacity);
  };
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const recipeRef = doc(getFirestore(), "Recipe", recipeId);
        const recipeDoc = await getDoc(recipeRef);
        if (recipeDoc.exists()) {
          setRecipe(recipeDoc.data());
        } else console.log("No such recipe found");
      } catch (error) {
        console.error("Error fetching recipe: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [recipeId]);
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator
          style={{ alignSelf: "center" }}
          size="large"
          color="#0000ff"
        />
      </View>
    );
  }
  if (!recipe) {
    return (
      <View>
        <Text>Recipe not found.</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.contentContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <Image source={{ uri: recipe.imageUrl }} style={styles.recipeImage} />

        <Text style={styles.title}>{recipe.name}</Text>

        <View style={styles.tagsContainer}>
          {recipe.tag.map((tag, index) => (
            <Text key={index} style={styles.tag}>
              {tag}
            </Text>
          ))}
        </View>

        <View style={styles.nutritionContainer}>
          <DognutChart
            calories={recipe.calo}
            unit={"cal"}
            series={[51, 39, 10]}
            sliceColor={["#55bfb5", "#b878e2", "#fdb853"]}
            widthAndHeight={75}
            fontCaloriesSize={17}
            fontUnitSize={12}
            coverRadius={0.8}
          />
          <View style={styles.nutritionInfo}>
            {[
              ["51%", "39%", "10%"],
              ["46.5 g", "15.6 g", "9.4 g"],
              ["Carbs", "Fat", "Protein"],
            ].map((item, rowIndex) => (
              <View key={rowIndex} style={styles.row}>
                {item.map((value, colIndex) => (
                  <Text key={colIndex} style={styles.nutritionText}>
                    {value}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        </View>

        <Text style={styles.subTitle}>Ingredients</Text>
        {recipe.ingredient.map((ingredient, index) => (
          <Text key={index} style={styles.ingredientText}>
            {ingredient}
          </Text>
        ))}

        <Text style={styles.subTitle}>Directions</Text>
        {recipe.direction.map((step, index) => (
          <Text key={index} style={styles.directionText}>
            {step}
          </Text>
        ))}
        <View style={{ paddingBottom: 120 }} />
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
    flexDirection: "row",
  },
  nutritionInfo: {
    flex: 1,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    paddingHorizontal: 20,
  },
  nutritionText: {
    fontSize: 16,
    fontWeight: "600",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
  },
  ingredientText: {
    fontSize: 16,
    marginVertical: 4,
  },
  directionText: {
    fontSize: 16,
    marginVertical: 4,
  },
});

export default MealDetailsScreen;
