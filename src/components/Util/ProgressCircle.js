import React, { useEffect } from "react";
import { TextInput, View, Text } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Circle, Svg } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedText = Animated.createAnimatedComponent(TextInput);

const radius = 45;
const circumference = radius * Math.PI * 2;
const duration = 1500;

const ProgressCircle = ({
  targetPercentage,
  nutrient,
  color1 = "#333333",
  color2 = "#333333",
  color3 = "#333333",
}) => {
  const strokeOffset = useSharedValue(circumference);
  const targetStrokeOffset = (circumference * (100 - targetPercentage)) / 100;

  const percentage = useDerivedValue(() => {
    const number = ((circumference - strokeOffset.value) / circumference) * 100;
    return withTiming(number, { duration });
  });

  const strokeColor = useDerivedValue(() => {
    return interpolateColor(
      percentage.value,
      [0, 50, 100],
      [color1, color2, color3]
    );
  });

  const animatedCircleProps = useAnimatedProps(() => ({
    strokeDashoffset: withTiming(strokeOffset.value, { duration }),
    stroke: strokeColor.value,
  }));

  // Animated props for text percentage
  const animatedTextProps = useAnimatedProps(() => ({
    text: `${Math.round(percentage.value)} %`,
  }));

  useEffect(() => {
    strokeOffset.value = targetStrokeOffset;
  }, [targetPercentage]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Display percentage text */}
      <View style={{ position: "absolute" }}>
        <AnimatedText
          style={{
            color: "#37306B",
            fontSize: 13,
            fontWeight: "bold",
          }}
          animatedProps={animatedTextProps}
        />
        {/* Static text component for nutrient */}
        <Text
          style={{
            color: "#37306B",
            fontSize: 13,
            alignSelf: "center",
          }}
        >
          {nutrient}
        </Text>
      </View>

      {/* SVG Circle */}
      <Svg
        height="80"
        width="80"
        viewBox="0 0 100 100"
        style={{ transform: [{ rotate: "-90deg" }] }}
      >
        <Circle
          cx="50"
          cy="50"
          r="45"
          stroke="#E7E7E7"
          strokeWidth="10"
          fill="transparent"
        />
        <AnimatedCircle
          animatedProps={animatedCircleProps}
          cx="50"
          cy="50"
          r="45"
          strokeDasharray={`${radius * Math.PI * 2}`}
          strokeWidth="10"
          fill="transparent"
        />
      </Svg>
    </View>
  );
};

export default ProgressCircle;
