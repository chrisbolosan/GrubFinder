import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";
import { Spacer } from "../spacer/spacer.component";
import { CompressRestaurantInfo } from "../restaurant/compress-restaurant-info.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
  border-radius: 5px;
`;
export const FavouritesBar = ({ favourites, onNavigate }) => (
  <FavouritesWrapper>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {favourites.map((restaurant) => {
        const key = restaurant.name;
        return (
          <TouchableOpacity
            onPress={() => {
              onNavigate("Restaurantdetails", {
                restaurant,
              });
            }}
          >
            <Spacer key={key} position="left" size="medium">
              <CompressRestaurantInfo restaurant={restaurant} />
            </Spacer>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  </FavouritesWrapper>
);
