import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PieChart from "react-native-pie-chart";

const DognutChart = ({
  calories,
  unit,
  widthAndHeight = 250,
  series,
  sliceColor,
  coverRadius = 0.5,
  coverFill = "#fff",
  fontCaloriesSize = 65,
  fontUnitSize = 30,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        {/* Pie Chart */}
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          coverRadius={coverRadius}
          coverFill={coverFill}
          accessibilityLabel="Calorie Distribution Chart"
        />
        {/* Centered Text */}
        <View style={styles.centerTextContainer}>
          <Text
            style={[styles.calories, { fontSize: fontCaloriesSize }]}
            accessibilityLabel="Calories"
          >
            {calories}
          </Text>
          <Text
            style={[styles.unit, { fontSize: fontUnitSize }]}
            accessibilityLabel="Unit"
          >
            {unit}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DognutChart;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  chartContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  centerTextContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  calories: {
    fontWeight: "bold",
    color: "#000",
  },
  unit: {
    color: "#000",
  },
});
