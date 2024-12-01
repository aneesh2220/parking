import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK-Bih3PoKgaFg6ZbKWvGiXeZMGNUOIUY",
  authDomain: "parking-1abfd.firebaseapp.com",
  projectId: "parking-1abfd",
  storageBucket: "parking-1abfd.firebasestorage.app",
  messagingSenderId: "201674328680",
  appId: "1:201674328680:web:f551069ff0d9f7c6ec49dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const dataBase = getFirestore();
export const storage = getStorage();

export default app;
