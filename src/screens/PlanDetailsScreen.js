import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as scale from "./scale";
import CustomButton from "../components/Util/CustomButton";

export default function PlanDetailsScreen({ navigation }) {
  const [selectedTab, setSelectedTab] = useState("Overview");

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/placeholder.png")}
        style={styles.image}
      />

      {/* Header Section */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backIcon}>←</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Plan Details</Text>

      {/* Plan Title */}
      <Text style={styles.planTitle}>Healthy Kickstart</Text>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        {["Overview", "Schedule"].map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab)}>
            <Text
              style={[styles.tabText, selectedTab === tab && styles.activeTab]}
            >
              {tab.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Content Section */}
      <ScrollView style={styles.contentContainer}>
        {selectedTab === "Overview" ? (
          <View style={styles.overviewContent}>
            <Text style={styles.description}>
              Start your health journey off on the right foot by focusing on the
              basics: reducing your added sugar intake and eating more fruits
              and vegetables. Our registered dietitian helps you stay on track
              with easy daily goals and tips, meal inspiration, and
              accountability. Start your health journey off on the right foot by
              focusing on the basics: reducing your added sugar intake and
              eating more fruits and vegetables. Our registered dietitian helps
              you stay on track with easy daily goals and tips, meal
              inspiration, and accountability. Start your health journey off on
              the right foot by focusing on the basics: reducing your added
              sugar intake and eating more fruits and vegetables. Our registered
              dietitian helps you stay on track with easy daily goals and tips,
              meal inspiration, and accountability. Start your health journey
              off on the right foot by focusing on the basics: reducing your
              added sugar intake and eating more fruits and vegetables. Our
              registered dietitian helps you stay on track with easy daily goals
              and tips, meal inspiration, and accountability.
            </Text>
            <Text style={styles.disclaimer}>
              Something something disclaimer
            </Text>
            <View style={styles.details}>
              <Text style={styles.detailLabel}>Duration:</Text>
              <Text style={styles.detailValue}>28 Days</Text>
            </View>
            <View style={styles.details}>
              <Text style={styles.detailLabel}>Difficulty:</Text>
              <Text style={styles.detailValue}>Beginner</Text>
            </View>
            <View style={styles.details}>
              <Text style={styles.detailLabel}>Commitment:</Text>
              <Text style={styles.detailValue}>Daily</Text>
            </View>

            {/* "Choose this plan if" Section */}
            <Text style={styles.sectionTitle}>Choose this plan if</Text>
            {[
              "You want to reduce added sugar in your diet",
              "You have trouble with sugar cravings",
            ].map((item, index) => (
              <Text key={index} style={styles.bulletPoint}>
                • {item}
              </Text>
            ))}
          </View>
        ) : (
          <Text style={styles.scheduleText}>
            Schedule content will go here...
          </Text>
        )}
      </ScrollView>

      {/* Call-to-Action Button */}
      <CustomButton text={"TRY A PLAN FOR FREE"} bgColor={"#333333"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
  },
  backButton: {
    position: "absolute",
    top: scale.backButtonY,
    left: scale.backButtonX,
  },
  backIcon: {
    fontSize: 30,
  },
  headerTitle: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    top: scale.headerTitleY,
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  planTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2C3E50",
    padding: 16,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  tabText: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: "#A9A9A9",
  },
  activeTab: {
    color: "#4E9AF1",
    borderBottomWidth: 2,
    borderBottomColor: "#4E9AF1",
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  overviewContent: {
    paddingBottom: 120,
  },
  description: {
    fontSize: 16,
    color: "#2C3E50",
    marginBottom: 10,
  },
  disclaimer: {
    fontSize: 12,
    color: "#A9A9A9",
    marginBottom: 20,
  },
  details: {
    flexDirection: "row",
    marginBottom: 10,
  },
  detailLabel: {
    fontWeight: "bold",
    color: "#2C3E50",
    width: 100,
  },
  detailValue: {
    color: "#2C3E50",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2C3E50",
    marginTop: 20,
  },
  bulletPoint: {
    fontSize: 16,
    color: "#2C3E50",
    marginBottom: 8,
  },
  scheduleText: {
    fontSize: 16,
    color: "#2C3E50",
    textAlign: "center",
    marginTop: 20,
  },
});
