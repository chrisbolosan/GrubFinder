/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";

import { AuthButton } from "../components/account.styles";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AppName,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <>
      <AccountBackground>
        <AppName
          style={{
            color: "white",
            fontWeight: "bold",
            zIndex: 9,
            textShadowColor: "black",
            fontSize: 25,
          }}
        >
          GrubFinder
        </AppName>
        <AccountCover />
        <AccountContainer>
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </AuthButton>
          <Spacer size="large" />
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </AccountContainer>
      </AccountBackground>
    </>
  );
};
