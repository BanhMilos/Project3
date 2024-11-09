import { createStackNavigator } from "@react-navigation/stack";
import PlansScreen from "./PlansScreen";
import PlanDetailsScreen from "./PlanDetailsScreen";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="PlansScreen">
      <Stack.Screen name="PlansScreen" component={PlansScreen} />
      <Stack.Screen name="PlanDetailsScreen" component={PlanDetailsScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
