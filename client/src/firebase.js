// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-blog-a9067.firebaseapp.com",
  projectId: "mern-blog-a9067",
  storageBucket: "mern-blog-a9067.appspot.com",
  messagingSenderId: "15685758144",
  appId: "1:15685758144:web:bb027f12b101415551d125"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);