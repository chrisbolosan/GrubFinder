import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components/native";

import { RestaurantsContextProvider } from "./src/services/restaurant/restaurants.context.js";
import { LocationContextProvider } from "./src/services/location/location.context.js";

import { Navigation } from "./src/infrastructure/navigation/index.js";
//custom fonts

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
//my infrastructure
import { theme } from "./src/infrastructure/theme";

// const tabBarIcon = (iconName) => ({size,color}) => (
//   <Ionicons name={"iconName"} size={size} color={color} />
// );

// function HomeScreen() {
//   return (
//     <SafeArea style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </SafeArea>
//   );
// }

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  //if neither fonts load
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
