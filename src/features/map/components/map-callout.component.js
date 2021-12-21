import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const CustomMarker = styled.Text``;

export const CustomCallout = ({ restaurant }) => (
  <View>
    <CustomMarker>{restaurant}</CustomMarker>
  </View>
);
