import React, { useState, createContext } from "react";
import firebase from "firebase/compat/app";
import { createAccount, loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })

      .catch((e) => {
        setIsLoading(false);
        setError(e.code.slice(5).toUpperCase());
        // const issue = e.code.toString();
        // if (issue === "auth/invalid-email") {
        //   setError("Invalid Email");
        // } else if (issue === "auth/invalid-password") {
        //   setError("Invalid Password");
        // }
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Passwords Do Not Match");
      return;
    }

    createAccount(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })

      .catch((e) => {
        setIsLoading(false);
        setError(e.code.slice(5).toUpperCase());
      });
  };
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
