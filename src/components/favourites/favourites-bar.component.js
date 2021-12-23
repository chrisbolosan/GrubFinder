import React from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";
import { Spacer } from "../spacer/spacer.component";
import { CompressRestaurantInfo } from "../restaurant/compress-restaurant-info.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
  border-radius: 5px;
`;
export const FavouritesBar = ({ favourites }) => (
  <FavouritesWrapper>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {favourites.map((restaurant) => {
        const key = restaurant.name;
        return (
          <Spacer key={key} position="left" size="medium">
            <CompressRestaurantInfo restaurant={restaurant} />
          </Spacer>
        );
      })}
    </ScrollView>
  </FavouritesWrapper>
);
