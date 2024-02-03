// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from  'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD95lVYTu-y-GDxA4N5PgE-HaxiFODrLvI",
  authDomain: "fir-weather-2c547.firebaseapp.com",
  projectId: "fir-weather-2c547",
  storageBucket: "fir-weather-2c547.appspot.com",
  messagingSenderId: "32921692189",
  appId: "1:32921692189:web:fd3b89029942ceebf17ef4",
  measurementId: "G-5DK7L3K255"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//
const auth = getAuth();

export {app, auth};