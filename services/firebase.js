// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuCe7ORuyZSfHoxzLJsuCUogUBCMdwHlo",
  authDomain: "pizzame-a39d6.firebaseapp.com",
  projectId: "pizzame-a39d6",
  storageBucket: "pizzame-a39d6.appspot.com",
  messagingSenderId: "796183380330",
  appId: "1:796183380330:web:0468ab090ca86a5e8c6513"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const authentication = getAuth(app);