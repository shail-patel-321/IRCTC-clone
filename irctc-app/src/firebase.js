// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA09nSbDdyfPQMxhD-iO8L8nThWbSJigU",
  authDomain: "irctc-app-27b50.firebaseapp.com",
  projectId: "irctc-app-27b50",
  storageBucket: "irctc-app-27b50.appspot.com",
  messagingSenderId: "864296481927",
  appId: "1:864296481927:web:8d27070924dba72c357422",
//   databaseURL:"https://irctc-app-27b50.firebasio.com"
    databaseURL:"https://irctc-app-27b50-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;