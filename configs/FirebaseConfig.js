// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHMDf6PpSBAAGzkIL2oDC5gyKEFw9XHLU",
  authDomain: "ai-travel-planner-3e81c.firebaseapp.com",
  projectId: "ai-travel-planner-3e81c",
  storageBucket: "ai-travel-planner-3e81c.appspot.com",
  messagingSenderId: "520592644208",
  appId: "1:520592644208:web:ab9912785b4e0acc0cbcb5",
  measurementId: "G-TYTWQHNVTF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);