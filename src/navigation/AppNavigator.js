import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";
import PlansScreen from "../screens/PlansScreen";
import PlanDetailsScreen from "../screens/PlanDetailsScreen";
import ChatScreen from "../screens/ChatScreen";
import Onboarding from "../components/Onboarding/Onboarding";
import GenderScreen from "../components/Onboarding/GenderScreen";
import AlergicScreen from "../components/Onboarding/AllergicScreen";
import GoalScreen from "../components/Onboarding/GoalScreen";
import ReadyScreen from "../screens/ReadyScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import SplashScreen from "../screens/SplashScreen";
import SignUpScreen from "../screens/SignUpScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Bottom Tab Navigator for Today, Plans, Chat, and More
const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Today" component={MainScreen} />
      <Tab.Screen name="Plans" component={PlansScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="More" component={MainScreen} />
    </Tab.Navigator>
  );
};

// Stack navigator for App
const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Sign up" component={SignUpScreen} />
      <Stack.Screen name="Ready" component={ReadyScreen} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Allergic" component={AlergicScreen} />
      <Stack.Screen name="Gender" component={GenderScreen} />
      <Stack.Screen name="Goal" component={GoalScreen} />
      <Stack.Screen name="Home" component={BottomTabs} />
      <Stack.Screen name="Meal" component={MealDetailsScreen} />
      <Stack.Screen name="PlanDetails" component={PlanDetailsScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
