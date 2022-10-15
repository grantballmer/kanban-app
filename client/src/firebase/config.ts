import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAGeDaJWXwylhWfjIqdOQGfM-QUhHnQYws",
  authDomain: "kanban-9a7d8.firebaseapp.com",
  projectId: "kanban-9a7d8",
  storageBucket: "kanban-9a7d8.appspot.com",
  messagingSenderId: "804563874571",
  appId: "1:804563874571:web:2edf344b33e0440b39a80e",
  measurementId: "G-FMC26N0XRN",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
