// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm5ZG3flyUfA6_oldhYj--emq02R0DvKY",
  authDomain: "auth-f4370.firebaseapp.com",
  projectId: "auth-f4370",
  storageBucket: "auth-f4370.appspot.com",
  messagingSenderId: "526081031609",
  appId: "1:526081031609:web:14e47372c3e0c4de354a68"
};

// Initialize Firebase
const app = getApps().length ? getApp: initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
export{app,db, auth};