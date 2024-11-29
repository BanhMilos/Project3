// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUCWfuQi60XdAgYOKikOTtI57jyE_yPk0",
  authDomain: "project3-d8e4f.firebaseapp.com",
  projectId: "project3-d8e4f",
  storageBucket: "project3-d8e4f.firebasestorage.app",
  messagingSenderId: "932329773133",
  appId: "1:932329773133:web:12b9699d764d0061e7e404",
  measurementId: "G-GW4BBD9YK2",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
