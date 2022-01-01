import React, { useState, createContext } from "react";
import firebase from "firebase/compat/app";
import {
  createAccount,
  loginRequest,
  logoutRequest,
} from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  firebase.auth().onAuthStateChanged((usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

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

  const onLogout = () => {
    setUser(null);
    firebase.auth().signOut();
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
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
