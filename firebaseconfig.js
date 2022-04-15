// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDOspxA6hbe5_ZCpbfaHO4FCeJ7OBf-gk",
  authDomain: "gagalu-48ceb.firebaseapp.com",
  projectId: "gagalu-48ceb",
  storageBucket: "gagalu-48ceb.appspot.com",
  messagingSenderId: "1013329605864",
  appId: "1:1013329605864:web:c0744a4972a10c841bc55d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };