import React from "react";
import styled from "styled-components/native";
import { WebView } from "react-native-webview";
import { Platform } from "react-native";
import { Text } from "../typography/text.component";

const MarkerCard = styled.View`
  max-width: 100px;
  align-items: center;
`;

const IconImage = styled.Image`
  border-radius: 10px;
  height: 120px;
  width: 100px;
  align-items: center;
`;

const AndroidImage = styled(WebView)`
  border-radius: 10px;
  height: 120px;
  width: 100px;
`;

const isAndroid = Platform.OS === "android";

export const CompressRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? AndroidImage : IconImage;
  return (
    <MarkerCard>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text variant="caption">{restaurant.name}</Text>
    </MarkerCard>
  );
};
