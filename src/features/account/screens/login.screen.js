import React, { useState, useContext } from "react";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { loginRequest } from "../../../services/authentication/authentication.service";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
} from "../components/account.styles";

export const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error } = useContext(AuthenticationContext);
  return (
    <>
      <AccountBackground>
        <AccountCover />
        <AccountContainer>
          <AuthInput
            onChangeText={(u) => setEmail(u)}
            value={email}
            label="Email"
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Spacer size="large">
            <AuthInput
              onChangeText={(p) => setPassword(p)}
              value={password}
              label="Password"
              textContentType="password"
              autoCapitalize="none"
              secureTextEntry
              secure
            />
          </Spacer>
          {error && (
            <Spacer size="large">
              <Text variant="error">{error}</Text>
            </Spacer>
          )}
          <Spacer size="large">
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthButton>
          </Spacer>
        </AccountContainer>
      </AccountBackground>
    </>
  );
};
