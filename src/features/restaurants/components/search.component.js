import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const Search = () => {
  return (
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
  );
};
