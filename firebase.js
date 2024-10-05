// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3ABThF8K6A9zCDUabLAZuQSnY2_YvnCc",
  authDomain: "evanttask.firebaseapp.com",
  databaseURL: "https://evanttask-default-rtdb.firebaseio.com",
  projectId: "evanttask",
  storageBucket: "evanttask.appspot.com",
  messagingSenderId: "1059094838353",
  appId: "1:1059094838353:web:369a46409dccbadb540c70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
export default db