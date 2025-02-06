// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7AwbesLtxBLpZgLfNWAinsWqjmjz8QF4",
  authDomain: "auth-moha-milon-bbb97.firebaseapp.com",
  projectId: "auth-moha-milon-bbb97",
  storageBucket: "auth-moha-milon-bbb97.firebasestorage.app",
  messagingSenderId: "817825056891",
  appId: "1:817825056891:web:122017157dc4a4c9047ade"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)