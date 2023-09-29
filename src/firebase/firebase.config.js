// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD1sniOkStH1UIBlJ0I6sBhnxOm6iTmd8",
  authDomain: "auth-moha-milon-d3c0a.firebaseapp.com",
  projectId: "auth-moha-milon-d3c0a",
  storageBucket: "auth-moha-milon-d3c0a.appspot.com",
  messagingSenderId: "328314703962",
  appId: "1:328314703962:web:9aa73c9722ac4d9b180863"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;