import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQRxvJlBke8gwL1UGxHoO6kT35r5TRU7E",
  authDomain: "beer-map-cea0e.firebaseapp.com",
  projectId: "beer-map-cea0e",
  storageBucket: "beer-map-cea0e.appspot.com",
  messagingSenderId: "442804566312",
  appId: "1:442804566312:web:1a46e6aff7081e23b0381d",
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);

//データベースへのアクセス
const db = getFirestore(app);
//Authentication
const auth = getAuth();

export { db, auth };
