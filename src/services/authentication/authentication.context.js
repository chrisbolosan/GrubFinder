import React, { useState, createContext } from "react";
import firebase from "firebase/compat/app";
import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
        console.log("###user#####", u);
      })

      .catch((e) => {
        setIsLoading(false);
        const issue = e.code.toString();
        if (issue === "auth/invalid-email") {
          setError("Invalid Email");
        } else if (issue === "auth/invalid-password") {
          {
            setError("Invalid Password");
          }
        }
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
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
