import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAEs1uPcgQGuqPr9yCoFOkiKcVUc_d-1Mc",
  authDomain: "gmeet-17093.firebaseapp.com",
  projectId: "gmeet-17093",
  storageBucket: "gmeet-17093.appspot.com",
  messagingSenderId: "796055095743",
  appId: "1:796055095743:web:cfec81be6f1058b014390a",
  measurementId: "G-RTGEN1WSM9"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
