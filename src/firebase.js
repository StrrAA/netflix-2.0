// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword  } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWgZz8Pg95OX43_sR_Uz0eawGVOJ6jC4c",
  authDomain: "netflix2-0-clone.firebaseapp.com",
  projectId: "netflix2-0-clone",
  storageBucket: "netflix2-0-clone.appspot.com",
  messagingSenderId: "703483370124",
  appId: "1:703483370124:web:57a57944c1ed23af2e39a9",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
