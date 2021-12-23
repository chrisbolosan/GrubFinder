import React, { useState, useEffect, createContext, useContext } from "react";

// import { RestaurantsContextProvider } from "../restaurant/restaurants.context";

export const FavouritesContext = createContext();
export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const add = (restaurant) => {
    setIsLoading(true);
    setFavourites([...favourites, restaurant]);
    console.log("im favourited", favourites);
  };

  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
    console.log("im not favourited============", favourites);
    console.log("im new favourited@@@@@@@@@@@@", newFavourites);
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
        isLoading,
        error,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
