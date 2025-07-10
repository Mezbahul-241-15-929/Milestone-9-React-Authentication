// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCneo8X6Ijlvs1YmeVsIWUhYUzjGNEvvPc",
  authDomain: "project-and-route--setup.firebaseapp.com",
  projectId: "project-and-route--setup",
  storageBucket: "project-and-route--setup.firebasestorage.app",
  messagingSenderId: "437809375350",
  appId: "1:437809375350:web:610226777fe9c2f970d757"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)