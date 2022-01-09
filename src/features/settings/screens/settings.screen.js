import React, { useContext } from "react";
import { Button } from "react-native";
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
          title="Logout"
          left={(props) => <List.Icon {...props} color="#000" icon="folder" />}
          onPress={() => navigation.navigate("logout")}
        />
      </List.Section>

      {/* <Text>Settings!</Text> */}
      <Button title="logout" onPress={() => onLogout()}>
        Logout
      </Button>
    </SafeArea>
  );
};
