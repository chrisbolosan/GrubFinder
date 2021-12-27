import React, { useState, useEffect } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { RestaurantsContextProvider } from "./src/services/restaurant/restaurants.context.js";
import { LocationContextProvider } from "./src/services/location/location.context.js";
import { Navigation } from "./src/infrastructure/navigation/index.js";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { firebaseConfig } from "./firebase.js";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context.js";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    firebase
      .auth()
      .signInWithEmailAndPassword("foodcritic@gmail.com", "Password123*")
      .then((user) => {
        console.log("fireusertest", user);
        setIsAuthenticated(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  if (!isAuthenticated) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
