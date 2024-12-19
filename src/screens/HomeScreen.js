import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import ProgressCircle from "../components/Util/ProgressCircle";
import { UserContext } from "../context/UserContext";
import {
  collection,
  query,
  getFirestore,
  orderBy,
  getDocs,
  startAfter,
  limit,
} from "firebase/firestore";
import { FlatList } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  const { userUID } = useContext(UserContext);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastVisible, setLastVisible] = useState(null);
  const [isEndList, setIsEndList] = useState(false);
  const fetchRecipes = async () => {
    console.log("wtf1"); // Log fetched data
    if (loading) return;
    setLoading(true);
    console.log("wtf2");

    let q = query(
      collection(getFirestore(), "Recipe"),
      orderBy("name"),
      limit(5)
    );
    console.log("wtf3");

    if (lastVisible) {
      q = query(q, startAfter(lastVisible));
    }
    console.log("wtf4");

    try {
      const querySnapshot = await getDocs(q);
      console.log("wtf5");
      if (querySnapshot.empty) {
        console.log("No more recipes to fetch");
        setLoading(false);
        setIsEndList(true);
        return; // Exit the function
      }
      const newRecipes = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("wtf6");

      setRecipes((prevRecipes) => [...prevRecipes, ...newRecipes]);
      console.log("wtf7");

      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      console.log("wtf8");
    } catch (error) {
      console.error("Error fetching recipes: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);
  useEffect(() => {
    console.log("Updated recipes:", recipes);
  }, [recipes]);
  const handleEndReached = () => {
    if (!loading && !isEndList) {
      fetchRecipes();
    }
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Meal", { recipeId: item.id })}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.foodImage} />
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
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
          <FlatList
            data={recipes}
            renderItem={renderItem}
            keyExtractor={(item) => item.id || item.key} // Ensure unique keys
            onEndReached={handleEndReached}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
              loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
              ) : null
            }
            contentContainerStyle={{ paddingBottom: 200 }} // Add padding if items are hidden
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

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
