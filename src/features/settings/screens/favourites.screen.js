import React, { useContext } from "react";
import styled from "styled-components";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

const FavouritesArea = styled(SafeArea)``;

export const FavouritesScreen = () => {
  const { favourites } = useContext(FavouritesContext);
  return favourites.length ? null : (
    <FavouritesArea>
      <Text>No favourites found.</Text>
    </FavouritesArea>
  );
};
