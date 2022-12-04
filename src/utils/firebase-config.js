import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrqUNtOpVaHT0e-bdfoWcfLYRcHN-sqTY",
  authDomain: "react-netlfix-clone-98564.firebaseapp.com",
  projectId: "react-netlfix-clone-98564",
  storageBucket: "react-netlfix-clone-98564.appspot.com",
  messagingSenderId: "422512460154",
  appId: "1:422512460154:web:166a7a6ecdef4f397b96c3",
  measurementId: "G-XCH5ELQWHR",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
