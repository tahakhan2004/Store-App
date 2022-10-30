// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, getAuth } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo22Z5_SjGxbfLD90oEyE_b1-UBFh5Yys",
  authDomain: "store-app-1880a.firebaseapp.com",
  projectId: "store-app-1880a",
  storageBucket: "store-app-1880a.appspot.com",
  messagingSenderId: "67110229568",
  appId: "1:67110229568:web:25949548bb7b4c2199b1a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const auth = getAuth(app);