import React from "react";
import { Text } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalTransition,
      }}
    >
      <RestaurantStack.Screen
        options={{ headerShown: false }}
        name="Restaurant"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        options={{ headerShown: false }}
        name="Restaurantdetails"
        component={() => <Text>Restaurant Details</Text>}
      />
    </RestaurantStack.Navigator>
  );
};
