import React, { useState } from "react";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { ScrollView } from "react-native-gesture-handler";
import { List } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const restaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="food-croissant" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Crepes" />
          <List.Item title="Eggs Benedict" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Burger" />
          <List.Item title="Taco Salad" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Memphis Smoked Ribs" />
          <List.Item title="Filet Mignon a la carte" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="glass-cocktail" />}
          expandable={setDinnerExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Gentleman Jack and Coke" />
          <List.Item title="Raspberry Lemonade" />
          <List.Item title="Sparkling Water" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
