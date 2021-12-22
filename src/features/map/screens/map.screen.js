import React, { useContext, useEffect, useState } from "react";
// import { View, Text } from "react-native";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurant/restaurants.context";
import { CustomCallout } from "../components/map-callout.component";
import { Search } from "../components/search.component";
import { WebView } from "react-native-webview";
import { Platform } from "react-native";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;
const IconImage = styled.Image`
  border-radius: 10px;
  height: 120px;
  width: 120px;
  align-items: center;
`;

const AndroidImage = styled(WebView)`
  border-radius: 10px;
  height: 120px;
  width: 120px;
`;

const isAndroid = Platform.OS === "android";
const FoodImage = isAndroid ? AndroidImage : IconImage;

export const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const { viewport, lat, lng } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);
  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.05,
        }}
      >
        {restaurants.map((restaurant) => {
          //   console.log("eat", restaurant);
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                longitude: restaurant.geometry.location.lng,
                latitude: restaurant.geometry.location.lat,
              }}
            >
              <MapView.Callout>
                {/* <FoodImage source={{ uri: restaurant.photos[0] }} /> */}
                <CustomCallout restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};
