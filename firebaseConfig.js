// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBCxl2xGBt9dpzWQZkmllAP-FT8khZpRQ",
  authDomain: "sanacion-33.firebaseapp.com",
  projectId: "sanacion-33",
  storageBucket: "sanacion-33.firebasestorage.app",
  messagingSenderId: "734190351220",
  appId: "1:734190351220:web:6b5b42e6b913e5c793f221",
  measurementId: "G-4WSWX0PZ4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Authentication and get a reference to the service
const db = getFirestore(app); // Initialize Firestore and get a reference to the service

export { auth, db };