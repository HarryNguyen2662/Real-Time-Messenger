import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCGaopf4rs4gx549DyiPk-Z8hjar4Uam3k",
  authDomain: "chatapp2662.firebaseapp.com",
  projectId: "chatapp2662",
  storageBucket: "chatapp2662.appspot.com",
  messagingSenderId: "658789243983",
  appId: "1:658789243983:web:b02e0396b594098e43de3a",
  measurementId: "G-TVGMV6BFWR"
};

// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
