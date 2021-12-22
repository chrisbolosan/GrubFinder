import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const CustomMarker = styled.Text`
  height: 100%;
  width: 100%;
  align-items: center;
`;
// const IconImage = styled.Image`
//   border-radius: 10px;
//   height: 150px;
//   width: 150px;
// `;

export const CustomCallout = ({ restaurant }) => {
  return (
    <View>
      {/* <IconImage /> */}
      <CustomMarker>{restaurant}</CustomMarker>
    </View>
  );
};
