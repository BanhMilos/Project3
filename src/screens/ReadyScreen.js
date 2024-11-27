import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import CustomButton from "../components/Util/CustomButton";
import * as scale from "./scale";
import { useNavigation } from "@react-navigation/native";

const ReadyScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.titleWrapper}>
          <Text style={[styles.text, styles.titleText]}>Hello!</Text>
          <Image
            source={require("../../assets/images/slide1icon.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.textWrapper}>
          <Text style={[styles.text, styles.subtitleText]}>
            Relax and let us handle your meals.
          </Text>
          <Text style={[styles.text, styles.subtitleText]}>
            Here are some questions to create a personalized plans for you.
          </Text>
        </View>
      </View>
      <CustomButton
        text={"I'M READY"}
        bgColor={"#333333"}
        Ypos={scale.buttonYPos}
        width={scale.buttonWidth}
        height={scale.buttonHeight}
        algs={"center"}
        textSize={scale.buttonTextSize}
        pos={"absolute"}
        onPress={() => navigation.navigate("Allergic")}
      />
    </View>
  );
};

export default ReadyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FAF9F6",
    width: "100%",
  },
  contentWrapper: {
    top: "30%",
    width: "100%",
    paddingHorizontal: 30,
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  textWrapper: {},
  text: {
    color: "#333333",
    fontFamily: "Lato-Bold",
  },
  titleText: {
    fontSize: scale.titleSize,
    fontWeight: "bold",
  },
  subtitleText: {
    fontSize: scale.subtitleSize,
    fontWeight: "semibold",
  },
  image: {
    resizeMode: "contain",
    height: 150,
    width: 150,
  },
});
