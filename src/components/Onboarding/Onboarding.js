import React, { useRef, useState, useCallback } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Animated,
  Dimensions,
  Text,
} from "react-native";
import slide from "./slide";

const { width } = Dimensions.get("window");

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  // Memoize the callback to optimize performance
  const viewableItemsChanged = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }, []);

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const renderItem = ({ item }) => (
    <View style={[styles.screen, { width }]}>{item.component}</View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.flatListContainer}>
        <FlatList
          data={slide}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
        />
      </View>

      {/* Page Indicator */}
      <View style={styles.indicatorContainer}>
        {slide.map((_, index) => {
          const dotWidth = scrollX.interpolate({
            inputRange: [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ],
            outputRange: [8, 16, 8],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={index}
              style={[
                styles.indicator,
                { width: dotWidth, marginHorizontal: 4 },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flatListContainer: {
    flex: 3,
  },
  screen: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  indicator: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FA7E61",
  },
});

export default Onboarding;
