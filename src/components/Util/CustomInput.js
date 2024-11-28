import React, { useRef } from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";

const CustomInput = ({
  value,
  setValue,
  placeholder = "Enter text", // Default placeholder
  secureTextEntry = false, // Default secureTextEntry
  isDisabled = false, // Default isDisabled
}) => {
  const textInputRef = useRef(null);

  // Focus the TextInput when the container is pressed
  const handleFocus = () => textInputRef.current?.focus();

  return (
    <TouchableOpacity
      style={[
        styles.container,
        isDisabled && styles.disabledContainer, // Apply disabled styling
      ]}
      onPress={handleFocus}
      activeOpacity={0.7}
      disabled={isDisabled}
    >
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        ref={textInputRef}
        editable={!isDisabled} // Disable input if isDisabled is true
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "gray",
    borderWidth: 0.4,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
    minHeight: 50,
    justifyContent: "center",
  },
  disabledContainer: {
    backgroundColor: "#f5f5f5",
    borderColor: "#d3d3d3",
  },
  input: {
    fontSize: 16,
    color: "black",
  },
});

export default CustomInput;
