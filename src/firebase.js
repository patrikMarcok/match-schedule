// firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "trainings-47ef6.firebaseapp.com",
    projectId: "trainings-47ef6",
    storageBucket: "trainings-47ef6.appspot.com",
    messagingSenderId: "15788379342",
    appId: "1:15788379342:web:73189a705456330929949f",
    databaseURL: "https://trainings-47ef6-default-rtdb.europe-west1.firebasedatabase.app"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;