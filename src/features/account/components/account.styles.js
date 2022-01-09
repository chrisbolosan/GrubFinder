import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { Button, TextInput } from "react-native-paper";
import { Text } from "react-native";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/foodbackground3.jpeg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.6);
  padding: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[2]};
  border-radius: 20px;
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[1]};
`;
export const AppName = styled(Text).attrs({
  color: "white",
  fontWeight: "bold",
  fontSize: 25,
})`
  margin-top: ${(props) => props.theme.space[5]};
`;

export const AuthInput = styled(TextInput)`
  width: 250px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[1]};
`;

export const FoodLogoWrapper = styled.View`
  width: 80px;
  height: 110px;
  position: absolute;
  top: 250px;
  padding: ${(props) => props.theme.space[2]};
`;
