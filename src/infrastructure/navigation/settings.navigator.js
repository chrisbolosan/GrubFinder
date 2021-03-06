import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{
          headerShown: false,
        }}
        name="Settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen
        // options={{
        //   headerShown: false,
        // }}
        name="Favourites"
        component={FavouritesScreen}
      />
    </SettingsStack.Navigator>
  );
};
