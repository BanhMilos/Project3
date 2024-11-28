import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import allergenData from "./allergenData"; // Your allergen data
import * as scale from "../../screens/scale";
import CustomButton from "../Util/CustomButton";
import { useNavigation } from "@react-navigation/native";

const AlergicScreen = () => {
  const [selected, setSelected] = useState([]); // Track selected allergens
  const navigation = useNavigation();

  // Handle allergen selection
  const handlePress = (item) => {
    setSelected((prevSelected) =>
      prevSelected.includes(item.text)
        ? prevSelected.filter((i) => i !== item.text)
        : [...prevSelected, item.text]
    );
  };

  // Render individual allergen button
  const renderButton = (item) => {
    const isSelected = selected.includes(item.text);
    return (
      <TouchableOpacity
        key={item.id}
        style={[
          styles.button,
          isSelected ? styles.selectedButton : styles.unselectedButton,
        ]}
        onPress={() => handlePress(item)}
      >
        <Text
          style={[
            styles.buttonText,
            isSelected
              ? styles.selectedButtonText
              : styles.unselectedButtonText,
            { fontSize: scale.textSize },
          ]}
        >
          {item.text}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontSize: scale.titleSize - 13 }]}>
        What are you allergic to?
      </Text>

      {/* ScrollView for allergen categories */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {allergenData.map((category) => (
          <View key={category.category} style={styles.categoryContainer}>
            <Text
              style={[styles.categoryTitle, { fontSize: scale.subtitleSize }]}
            >
              {category.category}
            </Text>
            <View style={styles.buttonContainer}>
              {category.allergens.map(renderButton)}
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Next Button */}
      <CustomButton
        text={"Next"}
        bgColor={"#333333"}
        Ypos={scale.buttonYPos}
        width={scale.buttonWidth}
        height={scale.buttonHeight}
        algs={"center"}
        textSize={scale.buttonTextSize}
        pos={"absolute"}
        onPress={() => navigation.navigate("Gender")}
      />
    </View>
  );
};

export default AlergicScreen;

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
    marginBottom: 100,
    top: "10%",
    marginLeft: 30,
    marginRight: 100,
  },
  categoryContainer: {
    margin: 20,
  },
  categoryTitle: {
    color: "#333333",
    fontFamily: "Lato-Bold",
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  button: {
    marginVertical: 5,
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
  },
  unselectedButton: {
    backgroundColor: "#FFFFFF",
    borderColor: "#FAF9F6",
  },
  selectedButton: {
    backgroundColor: "#FEEFEB",
    borderColor: "#FA7E61",
  },
  unselectedButtonText: {
    color: "#000000",
    fontWeight: "450",
  },
  selectedButtonText: {
    color: "#FA7E61",
    fontWeight: "450",
  },
  scrollViewContent: {
    paddingBottom: 115,
    top: "5%",
  },
});
