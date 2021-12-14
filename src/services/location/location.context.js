import React, { useState, createContext, useEffect } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();
export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState(null);
  const [location, setLocation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = null;

  const retrieveLocations = () => {
    setIsLoading(true);

    setTimeout(() => {
      locationRequest()
        .then(locationTransform)
        .then((results) => {
          setIsLoading(false);
          setLocation(results);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error);
        });
    });
  };

  useEffect(() => {
    retrieveLocations(setLocation);
  }, []);

  return (
    <LocationContext.Provider
      value={{
        location,
        isLoading,
        error,
        search: () => null,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
