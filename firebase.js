// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { FIREBASE_API_KEY } from "@env";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "project3-d8e4f.firebaseapp.com",
  projectId: "project3-d8e4f",
  storageBucket: "project3-d8e4f.firebasestorage.app",
  messagingSenderId: "932329773133",
  appId: "1:932329773133:web:1159c6ae63ef7c96e7e404",
  measurementId: "G-22S1L0EB17",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
