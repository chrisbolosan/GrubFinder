import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { restaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

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
        component={restaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
