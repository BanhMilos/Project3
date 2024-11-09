import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Line } from "react-native-svg";

const SVGLine = ({ color = "#000", width = "100%", thickness = 2 }) => (
  <View style={[styles.container, { width }]}>
    <Svg height={thickness} width="100%">
      <Line
        x1="0"
        y1={thickness / 2}
        x2="100%"
        y2={thickness / 2}
        stroke={color}
        strokeWidth={thickness}
      />
    </Svg>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SVGLine;
