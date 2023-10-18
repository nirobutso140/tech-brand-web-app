// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6RBAhmcnLb9Xu3eguK1WHDj6dbJooZDk",
  authDomain: "technology-auth.firebaseapp.com",
  projectId: "technology-auth",
  storageBucket: "technology-auth.appspot.com",
  messagingSenderId: "619784646516",
  appId: "1:619784646516:web:f233860f6ec5241b760621"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app