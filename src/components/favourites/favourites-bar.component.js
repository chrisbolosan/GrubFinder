import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";
import { Spacer } from "../spacer/spacer.component";
import { CompressRestaurantInfo } from "../restaurant/compress-restaurant-info.component";
import { Text } from "../typography/text.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
  border-radius: 5px;
`;
export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (favourites.length === 0) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer variant="left.medium">
        <Text variant="caption">Your Favorites</Text>
      </Spacer>

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
};
