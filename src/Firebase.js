// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAAzZnzUVYQCtvsT1gsSq2BjRO1qkQLRTI",
    authDomain: "male-fashion-b8622.firebaseapp.com",
    projectId: "male-fashion-b8622",
    storageBucket: "male-fashion-b8622.appspot.com",
    messagingSenderId: "214272884380",
    appId: "1:214272884380:web:aac58a978f4878ab573759",
    measurementId: "G-Y8H85V7ZN5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
