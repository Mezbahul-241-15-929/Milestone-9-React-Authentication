// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfDJbcUu66YbK2cZIJtvsOO2Mw4yDyJ3g",
  authDomain: "module-51-react-auth.firebaseapp.com",
  projectId: "module-51-react-auth",
  storageBucket: "module-51-react-auth.firebasestorage.app",
  messagingSenderId: "734842923426",
  appId: "1:734842923426:web:f0f74efc30222a6c676afb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);