import styled from "styled-components/native";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/foodbackground.jpeg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  resizeMode=cover;
`;
