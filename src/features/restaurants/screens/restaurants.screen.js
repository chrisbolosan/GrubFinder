import React, { useContext } from "react";
import { StatusBar, SafeAreaView, FlatList } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurant/restaurants.context";
import { ActivityIndicator, Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Search } from "../components/search.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

// return (
//   <SafeAreaView style={styles.container}>
//     <FlatList
//       data={DATA}
//       renderItem={renderItem}
//       keyExtractor={item => item.id}
//     />
//   </SafeAreaView>
// );

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;
export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={(isLoading, error, restaurants)}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
