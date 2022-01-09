import React, { useContext } from "react";
import styled from "styled-components";
import { List, Avatar } from "react-native-paper";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Avatar.Image
        size={100}
        source={require("../../../../assets/userSettings.webp")}
      />
      <List.Section>
        <List.Subheader>Settings</List.Subheader>
        <SettingsItem
          title="Favorites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
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
