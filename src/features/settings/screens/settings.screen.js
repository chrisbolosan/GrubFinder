import React, { useContext } from "react";
import { Button } from "react-native";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      {/* <Text>Settings!</Text> */}
      <Button title="logout" onPress={() => onLogout()}>
        Logout
      </Button>
    </SafeArea>
  );
};
