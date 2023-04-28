// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4fqpbH8P_b6n4nLyTBNWA8bTpc9tirv8",
  authDomain: "christmas-store-332d5.firebaseapp.com",
  projectId: "christmas-store-332d5",
  storageBucket: "christmas-store-332d5.appspot.com",
  messagingSenderId: "687698852652",
  appId: "1:687698852652:web:436d5301c96ea3d1c9ca89",
  measurementId: "G-2PQWM20VDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export {auth};
