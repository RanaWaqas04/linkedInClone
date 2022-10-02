import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBK65GuQQWYC0LTH6XZLqb5zzikJyODPi8",
  authDomain: "linkedin-clone-2ae82.firebaseapp.com",
  projectId: "linkedin-clone-2ae82",
  storageBucket: "linkedin-clone-2ae82.appspot.com",
  messagingSenderId: "562391354564",
  appId: "1:562391354564:web:9e92482b1c9bf521198d91",
  measurementId: "G-LJFJ5H6WRY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
