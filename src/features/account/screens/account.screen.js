import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import { fontWeights } from "../../../infrastructure/theme/fonts";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
} from "../components/account.styles";

const chrisfood = styled.Text`
  color: rgba(255, 255, 255);
`;
export const AccountScreen = () => {
  return (
    <>
      <AccountBackground>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: "25px" }}>
          GrubFinder
        </Text>
        <AccountContainer />
        <AccountCover />
      </AccountBackground>
    </>
  );
};
