import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useContext, useState } from "react";
import * as scale from "../../screens/scale";
import CustomButton from "../Util/CustomButton";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { UserContext } from "../../context/UserContext";

const GenderScreen = ({ navigation }) => {
  const [selectedGender, setSelectedGender] = useState(null);
  const { userUID } = useContext(UserContext);
  const handleSave = async () => {
    try {
      const userRef = doc(getFirestore(), "User", userUID);
      await updateDoc(userRef, {
        gender: selectedGender,
      });
      navigation.navigate("Goal");
    } catch (error) {
      console.log("Error updating allergens ", error);
    }
  };
  const renderGenderOption = (gender, imageSource, label) => (
    <TouchableOpacity
      style={[
        styles.cardGender,
        selectedGender === gender ? styles.selectedCard : styles.unselectedCard,
      ]}
      onPress={() => setSelectedGender(gender)}
    >
      <Image source={imageSource} style={styles.image} />
      <Text
        style={[
          styles.gender,
          { fontSize: scale.textSize + 6 },
          selectedGender === gender
            ? styles.selectedText
            : styles.unselectedText,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontSize: scale.titleSize - 13 }]}>
        What is your gender?
      </Text>

      {/* Card Description */}
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/placeholder.png")}
        />
        <Text style={[styles.text, { fontSize: scale.textSize }]}>
          This will help us tailor meal plans to better match your nutritional
          needs
        </Text>
      </View>

      {/* Gender Options */}
      <View style={styles.cardWrapper}>
        {renderGenderOption(
          "male",
          require("../../../assets/images/male.png"),
          "Male"
        )}
        {renderGenderOption(
          "female",
          require("../../../assets/images/female.png"),
          "Female"
        )}
      </View>

      {/* Other Option */}
      <TouchableOpacity
        style={[
          styles.other,
          selectedGender === "other"
            ? styles.selectedCard
            : styles.unselectedCard,
        ]}
        onPress={() => setSelectedGender("other")}
      >
        <Text
          style={[
            styles.gender,
            { fontSize: scale.textSize },
            selectedGender === "other"
              ? styles.selectedText
              : styles.unselectedText,
          ]}
        >
          Other / I'd rather not say
        </Text>
      </TouchableOpacity>

      {/* Next Button */}
      {selectedGender && (
        <CustomButton
          text={"Next"}
          bgColor={"#333333"}
          Ypos={scale.buttonYPos}
          width={scale.buttonWidth}
          height={scale.buttonHeight}
          algs={"center"}
          textSize={scale.buttonTextSize}
          pos={"absolute"}
          onPress={() => handleSave()}
        />
      )}
    </View>
  );
};

export default GenderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
    width: "100%",
  },
  title: {
    color: "#2C3E50",
    fontFamily: "Lato-Bold",
    fontWeight: "bold",
    marginBottom: 90,
    top: "10%",
    marginLeft: 30,
    marginRight: 100,
  },
  card: {
    flexDirection: "row",
    paddingRight: 20,
    paddingVertical: 20,
    backgroundColor: "#E4EEF4",
    marginHorizontal: 30,
    marginVertical: 30,
    borderRadius: 10,
  },
  cardWrapper: {
    flexDirection: "row",
    marginHorizontal: 10,
    flex: 0.7,
    marginBottom: 15,
  },
  cardGender: {
    flex: 1,
    margin: 5,
    borderRadius: 15,
    paddingVertical: 25,
    borderWidth: 2,
  },
  other: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 7,
    paddingHorizontal: 5,
    borderRadius: 15,
    width: "60%",
    alignSelf: "center",
    borderWidth: 1.5,
  },

  unselectedCard: {
    backgroundColor: "#FFFFFF",
    borderColor: "#FAF9F6",
  },
  selectedCard: {
    backgroundColor: "#F5F5F5",
    borderColor: "#0A85FF",
  },
  gender: {
    alignSelf: "center",
    fontWeight: "600",
  },
  selectedText: {
    color: "#1E90FF",
    fontWeight: "600",
  },
  unselectedText: {
    color: "#000000",
    fontWeight: "600",
  },
  image: {
    width: null,
    height: "100%",
    flex: 1,
  },
  text: {
    flex: 4,
    color: "#333333",
  },
  button: {
    marginVertical: 5,
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
  },
});
