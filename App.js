import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./src/screens/MainScreen";
import PlansScreen from "./src/screens/PlansScreen";
import PlanDetailsScreen from "./src/screens/PlanDetailsScreen";
import ChatScreen from "./src/screens/ChatScreen";
import Onboarding from "./src/components/Onboarding/Onboarding";
import GenderScreen from "./src/components/Onboarding/GenderScreen";
import AlergicScreen from "./src/components/Onboarding/AllergicScreen";
import GoalScreen from "./src/components/Onboarding/GoalScreen";
import ReadyScreen from "./src/screens/ReadyScreen";
import MealDetailsScreen from "./src/screens/MealDetailsScreen";
import SplashScreen from "./src/screens/SplashScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

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
      <Stack.Screen
        name="PlanDetails"
        component={PlanDetailsScreen}
        options={{
          tabBarStyle: { display: "none" },
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
