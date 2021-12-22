import React, { useState, useEffect, createContext, useContext } from "react";

import { RestaurantsContextProvider } from "../restaurant/restaurants.context";

export const FavouritesContext = createContext();
export const FavouritesContextProvider = ({ children }) => {
  const [favourite, setFavourite] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const { restaurant } = useContext(RestaurantContext);

  // const retrieveFavourites = (restaurant) => {
  //   setIsLoading(true);
  //   setFavourite([]);
  // };
  // useEffect(() => {
  //   if (restaurant) {
  //     setFavourite(restaurant);
  //   }
  // });

  return (
    <FavouritesContext.Provider value={{ favourite, isLoading, error }}>
      {children}
    </FavouritesContext.Provider>
  );
};
