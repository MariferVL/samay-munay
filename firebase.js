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
  apiKey: "AIzaSyD0I3DAUZnLmt7YOjgjhblPZdYGh97gmYA",
  authDomain: "munaysamay.firebaseapp.com",
  projectId: "munaysamay",
  storageBucket: "munaysamay.firebasestorage.app",
  messagingSenderId: "522613317608",
  appId: "1:522613317608:web:7b5ed33e486ee83477ce5d",
  measurementId: "G-TNVS420VLT"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Authentication and get a reference to the service
const db = getFirestore(app); // Initialize Firestore and get a reference to the service

export { auth, db };