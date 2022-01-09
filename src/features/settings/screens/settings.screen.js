import React, { useContext } from "react";

import { List } from "react-native-paper";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const SettingsScreen = ({ navigation }) => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <List.Section>
        <List.Subheader>Settings</List.Subheader>
        <List.Item
          title="Favorites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <List.Item
          title="logout"
          left={(props) => (
            <List.Icon {...props} color="#000" icon="logout-variant" />
          )}
          onPress={() => onLogout()}
        />
      </List.Section>
    </SafeArea>
  );
};
