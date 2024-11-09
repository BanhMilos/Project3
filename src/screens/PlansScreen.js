import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import plans from "./plans";
import { useNavigation } from "@react-navigation/native";
import PlanDetailsScreen from "./PlanDetailsScreen";

export default function PlansScreen() {
  const [searchText, setSearchText] = useState("");
  const nav = useNavigation();
  // Filter the plans based on the search text
  const filteredPlans = plans.filter((plan) =>
    plan.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Plans</Text>
        <TouchableOpacity style={styles.premiumButton}>
          <Text style={styles.premiumText}>Go Premium</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Find a Plan</Text>
        <Text style={styles.sectionSubtitle}>
          Meal plans, workout plans and more. Start a plan, follow along, and
          reach your goals.
        </Text>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search plans"
            placeholderTextColor="#A9A9A9"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </View>

      <View style={styles.availablePlans}>
        <FlatList
          data={filteredPlans}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator="false"
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.planCard}
              onPress={() => nav.navigate("PlanDetails")}
            >
              <Image source={item.image} style={styles.planImage} />
              <View style={styles.contentWrapper}>
                <Text style={styles.planTitle}>{item.title}</Text>
                <Text style={styles.planDuration}>{item.duration}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
    paddingTop: 45,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  headerTitle: {
    color: "#2C3E50",
    fontSize: 20,
    fontWeight: "bold",
  },
  premiumButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#4E9AF1",
  },
  premiumText: {
    color: "#4E9AF1",
    fontSize: 14,
  },

  searchContainer: {
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    padding: 10,
    color: "#2C3E50",
    fontSize: 16,
  },

  section: {
    padding: 16,
  },
  sectionTitle: {
    color: "#2C3E50",
    fontSize: 24,
    fontWeight: "bold",
  },
  secondSection: {
    color: "#2C3E50",
    fontSize: 20,
    fontWeight: "bold",
  },
  sectionSubtitle: {
    color: "#2C3E50",
    fontSize: 16,
    marginTop: 4,
    marginBottom: 16,
  },

  filterButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#A9A9A9",
  },

  availablePlans: {
    flex: 1,
    paddingHorizontal: 16,
  },
  planCard: {
    marginBottom: 25,
  },
  planImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  contentWrapper: {
    left: 15,
  },
  planTitle: {
    color: "#2C3E50",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 8,
  },
  planDuration: {
    color: "#A9A9A9",
    fontSize: 14,
  },
});
