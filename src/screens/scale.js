import { Dimensions } from "react-native";

// Get screen dimensions
const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

// Title styles
const titleScale = 0.125;
const titleSize = screenWidth * titleScale;

// Subtitle styles
const subtitleScale = 0.05;
const subtitleSize = screenWidth * subtitleScale;

// Button styles
const buttonTextScale = 0.05;
const buttonTextSize = screenWidth * buttonTextScale;
const buttonHeight = screenHeight * 0.07;
const buttonWidth = screenWidth * 0.7;
const buttonYPos = screenHeight * 0.875;

// Text styles
const textScale = 0.04;
const textSize = screenWidth * textScale;

// Back button
const backbuttonY = 0.04 * screenHeight;
const backButtonX = 0.05 * screenWidth;
const headerTitleY = 0.045 * screenHeight;
const headerTitleX = 0.5 * screenWidth;
export {
  titleSize,
  subtitleSize,
  buttonTextSize,
  textSize,
  buttonHeight,
  buttonWidth,
  buttonYPos,
  backButtonX,
  backbuttonY,
  headerTitleX,
  headerTitleY,
};
