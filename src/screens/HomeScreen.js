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
  doc,
  getDoc,
} from "firebase/firestore";

const HomeScreen = ({ navigation }) => {
  const { userUID } = useContext(UserContext);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastVisible, setLastVisible] = useState(null);
  const [isEndList, setIsEndList] = useState(false);
  const [isTodayHaveProgress, setIsTodayHaveProgress] = useState(false);
  const [todayProgress, setTodayProgress] = useState(null);
  const fetchTodayProgress = async () => {
    setLoading(true);
    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, "0")}.${String(
      today.getMonth() + 1
    ).padStart(2, "0")}.${today.getFullYear()}`;
    console.log(formattedDate);
    try {
      const progressRef = doc(
        getFirestore(),
        "User",
        userUID,
        "DailyProgress",
        formattedDate
      );
      const progressDoc = await getDoc(progressRef);
      if (progressDoc.exists()) {
        console.log("Today's progress:", progressDoc.data());
        setIsTodayHaveProgress(true);
        setTodayProgress(progressDoc.data());
        console.log("No progress found for today.");
      }
    } catch (error) {
      console.error("Error fetching progress:", error);
    } finally {
      setLoading(false);
    }
  };
  const fetchRecipes = async () => {
    if (loading) return;
    setLoading(true);

    let q = query(
      collection(getFirestore(), "Recipe"),
      orderBy("name"),
      limit(5)
    );

    if (lastVisible) {
      q = query(q, startAfter(lastVisible));
    }

    try {
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        console.log("No more recipes to fetch");
        setLoading(false);
        setIsEndList(true);
        return;
      }
      const newRecipes = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setRecipes((prevRecipes) => [...prevRecipes, ...newRecipes]);

      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
    } catch (error) {
      console.error("Error fetching recipes: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
    fetchTodayProgress();
  }, []);
  useEffect(() => {
    console.log("Updated recipes:", recipes);
  }, [recipes]);
  const handleEndReached = () => {
    if (!loading && !isEndList) {
      fetchRecipes();
    }
  };
  const renderItem = (recipe) => (
    <TouchableOpacity
      key={recipe.id}
      onPress={() => navigation.navigate("Meal", { recipeId: recipe.id })}
    >
      <Image source={{ uri: recipe.imageUrl }} style={styles.foodImage} />
    </TouchableOpacity>
  );
  return (
    <ScrollView
      style={styles.container}
      onMomentumScrollEnd={handleEndReached}
      contentContainerStyle={{ paddingBottom: 16 }}
    >
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

          {isTodayHaveProgress ? (
            <>
              <View style={styles.macroContainer}>
                <View style={styles.caloriesWrapper}>
                  <Text style={styles.caloriesText}>Calories</Text>
                  <Text style={styles.caloriesAmount}>
                    {todayProgress.calo}
                  </Text>
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
            </>
          ) : (
            <Text style={styles.noProgressText}>
              You haven't eaten anything today yet.
            </Text>
          )}
        </View>

        {/* Food Images Section */}
        <View style={styles.imageContainer}>
          {recipes.map(renderItem)}

          {loading && (
            <ActivityIndicator
              size="large"
              color="#0000ff"
              style={{ marginVertical: 20 }}
            />
          )}
        </View>
      </View>
    </ScrollView>
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
