// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAD7ieoDtxJG9jnnppKr1qB5Kbw0_VeFAY",
  authDomain: "discrod-clone-e5ec8.firebaseapp.com",
  projectId: "discrod-clone-e5ec8",
  storageBucket: "discrod-clone-e5ec8.firebasestorage.app",
  messagingSenderId: "773732604755",
  appId: "1:773732604755:web:ceb80a28d10d1fd854dfa6",
  measurementId: "G-HVG21M7D42"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db};