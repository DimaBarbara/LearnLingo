// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpxq8SYiHd2Jx5pYZjYHu1H2eQ7n4GRlg",
  authDomain: "learnlingobd.firebaseapp.com",
  projectId: "learnlingobd",
  storageBucket: "learnlingobd.firebasestorage.app",
  messagingSenderId: "586063665452",
  appId: "1:586063665452:web:6e903e5ad3b71df544f489",
  measurementId: "G-J51Y4ZNBZ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
