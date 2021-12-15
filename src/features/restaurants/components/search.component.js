import React, { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";
import styled from "styled-components/native";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const Search = () => {
  const { keyword } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  //   console.log("searchcontext", locationContext);
  return (
    <SearchContainer>
      <Searchbar placeholder="Search for a location" value={keyword} />
    </SearchContainer>
  );
};
