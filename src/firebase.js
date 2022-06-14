// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD_tYGj6wPF22sJxrq8iSZmpse7TYivz2Q",

  authDomain: "cali-workspace.firebaseapp.com",

  projectId: "cali-workspace",

  storageBucket: "cali-workspace.appspot.com",

  messagingSenderId: "404813867142",

  appId: "1:404813867142:web:bdf031481fad32e3b8c907",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleFirebaseAuth = new firebase.auth.GoogleAuthProvider();
