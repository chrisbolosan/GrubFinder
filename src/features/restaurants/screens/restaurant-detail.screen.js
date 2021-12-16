import React from "react";
import { SafeAreaView, StatusBar, Text } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const restaurantDetailScreen = ({ route, navigation }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      {
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      }
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeArea>
  );
};
