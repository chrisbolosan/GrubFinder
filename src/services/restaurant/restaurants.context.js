import React, {useState, createContext, useEffect, useMemo } from "react";
import { RestaurantInfoCard } from "../../features/restaurants/components/restaurant-info-card.component";

import { restaurantsRequest, restaurantsTransform } from "./restaurants.service";

export const RestaurantsContext = createContext();
export const RestaurantsContextProvider = ({children}) => {
    return(
        <RestaurantsContext.Provider value ={{
            restaurants :[1,2,3],
        }}>
            {children}
        </RestaurantsContext.Provider>
    )
}