import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ProgressCircle from "../components/Util/ProgressCircle";
import { useNavigation } from "@react-navigation/native";

const MainScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentWrapper}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.profileIcon}>
            <Text>👤</Text>
          </View>
          <View style={styles.menuIcon}>
            <Text>☰</Text>
          </View>
        </View>

        {/* Progress Section */}
        <View style={styles.progressCard}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressTitle}>Today's Progress</Text>
            <Text style={styles.viewMore}>View more</Text>
          </View>

          <View style={styles.macroContainer}>
            <View style={styles.caloriesWrapper}>
              <Text style={styles.caloriesText}>Calories</Text>
              <Text style={styles.caloriesAmount}>1,284</Text>
            </View>
            <ProgressCircle
              targetPercentage={65}
              nutrient="Pro"
              color1="#A7C7E7"
              color2="#4682B4"
              color3="#1C3D72"
            />
            <ProgressCircle
              targetPercentage={29}
              nutrient="Fat"
              color1="#F1C27D"
              color2="#D4AF37"
              color3="#C68E17"
            />
            <ProgressCircle
              targetPercentage={85}
              nutrient="Carb"
              color1="#D9EAD3"
              color2="#4CAF50"
              color3="#2E7D32"
            />
          </View>

          <Text style={styles.motivationText}>
            🎉 Keep the pace! You're doing great.
          </Text>
        </View>

        {/* Food Images Section */}
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Meal")}>
            <Image
              source={require("../../assets/images/placeholder.png")}
              style={styles.foodImage}
            />
          </TouchableOpacity>
          <Image
            source={require("../../assets/images/placeholder.png")}
            style={styles.foodImage}
          />
          <Image
            source={require("../../assets/images/placeholder.png")}
            style={styles.foodImage}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 40,
    backgroundColor: "#FAF9F6",
  },
  contentWrapper: {
    paddingBottom: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  profileIcon: {
    width: 40,
    height: 40,
    backgroundColor: "#ddd",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  menuIcon: {
    fontSize: 24,
  },
  progressCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  progressTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  viewMore: {
    color: "#007BFF",
  },
  caloriesWrapper: {
    marginRight: 30,
  },
  caloriesText: {
    marginTop: 10,
    color: "#888",
    fontSize: 12,
  },
  caloriesAmount: {
    fontSize: 20,
    fontWeight: "bold",
  },
  macroContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  motivationText: {
    marginTop: 10,
    color: "#333",
    fontStyle: "italic",
  },
  imageContainer: {
    marginVertical: 10,
  },
  foodImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginVertical: 5,
  },
});
