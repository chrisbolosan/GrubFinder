import React, { useState, useContext } from "react";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  ErrorContainer,
} from "../components/account.styles";

export const RegisterScreen = ({ navigation: { goBack } }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error } = useContext(AuthenticationContext);

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
            />
          </Spacer>
          <Spacer size="large">
            <AuthInput
              onChangeText={(p) => setRepeatedPassword(p)}
              value={repeatedPassword}
              label="Retype Password"
              textContentType="password"
              autoCapitalize="none"
              secureTextEntry
            />
          </Spacer>
          {error && (
            <ErrorContainer>
              <Text variant="error">{error}</Text>
            </ErrorContainer>
          )}
          <Spacer size="large">
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() => onRegister(email, password, repeatedPassword)}
            >
              Register
            </AuthButton>
          </Spacer>
        </AccountContainer>
        <Spacer size="large">
          <AuthButton mode="contained" onPress={() => goBack()}>
            Back
          </AuthButton>
        </Spacer>
      </AccountBackground>
    </>
  );
};
