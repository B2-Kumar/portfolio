import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGXobCwgPjWhwoyzTDdfQda48CLmZU5hM",
  authDomain: "portfolio-1fe89.firebaseapp.com",
  projectId: "portfolio-1fe89",
  storageBucket: "portfolio-1fe89.appspot.com",
  messagingSenderId: "314481372512",
  appId: "1:314481372512:web:593294914b692ca95a0205"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
