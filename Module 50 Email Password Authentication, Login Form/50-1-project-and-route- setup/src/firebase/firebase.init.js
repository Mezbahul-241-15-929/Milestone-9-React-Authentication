// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2RuX3D_C6Za0GUg8ZbyHOpMAQ_JthJ2o",
  authDomain: "simple-react-firebase-87e89.firebaseapp.com",
  projectId: "simple-react-firebase-87e89",
  storageBucket: "simple-react-firebase-87e89.firebasestorage.app",
  messagingSenderId: "585969869585",
  appId: "1:585969869585:web:a9be949d2f7555a6d2a2b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)