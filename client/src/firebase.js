// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b1797.firebaseapp.com",
  projectId: "mern-estate-b1797",
  storageBucket: "mern-estate-b1797.appspot.com",
  messagingSenderId: "646961133957",
  appId: "1:646961133957:web:88081f45727d3b4932ecec",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
