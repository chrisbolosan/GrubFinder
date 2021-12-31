import React, { useState, useContext } from "react";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { ActivityIndicator, Colors } from "react-native-paper";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  ErrorContainer,
} from "../components/account.styles";

export const LoginScreen = ({ navigation: { goBack } }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, isLoading, error } = useContext(AuthenticationContext);

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
          {error && (
            <ErrorContainer>
              <Text variant="error">{error}</Text>
            </ErrorContainer>
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
        <Spacer size="large">
          {isLoading ? (
            <ActivityIndicator
              size={50}
              animating={true}
              color={Colors.blue300}
            />
          ) : (
            <AuthButton mode="contained" onPress={() => goBack()}>
              Back
            </AuthButton>
          )}
        </Spacer>
      </AccountBackground>
    </>
  );
};
