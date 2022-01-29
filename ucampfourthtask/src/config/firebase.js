import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBE2e1_ilgdhL8Jo9L05JNUYvUtLNTecWY",
  authDomain: "ucampfourthtask.firebaseapp.com",
  projectId: "ucampfourthtask",
  storageBucket: "ucampfourthtask.appspot.com",
  messagingSenderId: "240186929429",
  appId: "1:240186929429:web:f9e92b85fe918b0ea1b91c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dbConfig = getFirestore(app);