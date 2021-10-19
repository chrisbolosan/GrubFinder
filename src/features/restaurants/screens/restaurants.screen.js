import React, {useContext} from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView, FlatList } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurant/restaurants.context";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
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

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;
export const RestaurantsScreen = () => {
  const restaurantContext = useContext(RestaurantsContext);
  console.log('imarestaurant',restaurantContext)
  return (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantList
      data={
        restaurantContext.restaurants
      }
      renderItem={() => (
        <Spacer position="bottom" size="large">
          <RestaurantInfoCard />
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
)
      };
