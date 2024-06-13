import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAI1hWO2spGah2KWmIfXWpuaSoOZm0nvtI",
  authDomain: "gastroapp-a2d5f.firebaseapp.com",
  projectId: "gastroapp-a2d5f",
  storageBucket: "gastroapp-a2d5f.appspot.com",
  messagingSenderId: "647517765984",
  appId: "1:647517765984:web:5630fa048974d5b4d41e05",
  measurementId: "G-NSBWESLTX2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);