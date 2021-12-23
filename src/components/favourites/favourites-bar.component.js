import React from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";

const FavouritesWrapper = styled.View`
  padding: 10px;
  height: 35px;
  width: 100%;

  border-radius: 5px;
`;
export const FavouritesBar = ({ favourites }) => {
  return (
    <FavouritesWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={true}></ScrollView>
    </FavouritesWrapper>
  );
};
