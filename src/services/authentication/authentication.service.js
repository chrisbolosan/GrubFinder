import firebase from "firebase/compat/app";

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const createAccount = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);
