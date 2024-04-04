// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-dc849.firebaseapp.com",
  projectId: "blog-dc849",
  storageBucket: "blog-dc849.appspot.com",
  messagingSenderId: "1072278664219",
  appId: "1:1072278664219:web:9897f0e7482f010861b4be"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);