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
const buttonHeight = screenHeight * 0.07;
const buttonWidth = screenWidth * 0.7;
const buttonYPos = screenHeight * 0.875;
const buttonTextSize = screenWidth * 0.05;

// Text styles
const textSize = screenWidth * 0.04;

// Header styles
const headerHeight = screenHeight * 0.1;
const backButtonX = screenWidth * 0.05;
const backButtonY = screenHeight * 0.055;
const headerTitleX = screenWidth * 0.5;
const headerTitleY = screenHeight * 0.065;

// Export all constants
export {
  titleSize,
  subtitleSize,
  buttonTextSize,
  textSize,
  buttonHeight,
  buttonWidth,
  buttonYPos,
  backButtonX,
  backButtonY,
  headerTitleX,
  headerTitleY,
  headerHeight,
};
