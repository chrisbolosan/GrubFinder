import React from "react";
import { Text } from "react-native";

import { AuthButton } from "../components/account.styles";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AppName,
} from "../components/account.styles";

export const AccountScreen = () => {
  return (
    <>
      <AccountBackground>
        <AppName style={{ color: "white", fontWeight: "bold", fontSize: 25 }}>
          GrubFinder
        </AppName>
        <AccountCover />
        <AccountContainer>
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            Login
          </AuthButton>
        </AccountContainer>
      </AccountBackground>
    </>
  );
};
