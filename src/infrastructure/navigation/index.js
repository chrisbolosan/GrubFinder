import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AccountNavigator } from "../../infrastructure/navigation/account.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AppNavigator } from "./app.navigator";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  console.log("########", isAuthenticated);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
