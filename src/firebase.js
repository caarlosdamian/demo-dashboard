import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "dashboard-59ca0.firebaseapp.com",
  projectId: "dashboard-59ca0",
  storageBucket: "dashboard-59ca0.appspot.com",
  messagingSenderId: "374932656652",
  appId: "1:374932656652:web:44c095bcf4865c509fd429"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db =  getFirestore(app)