import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAx3jVoVw7hEQwidepJygu4a8xyuzxpVho",
  authDomain: "fitness-gym-9f673.firebaseapp.com",
  projectId: "fitness-gym-9f673",
  storageBucket: "fitness-gym-9f673.firebasestorage.app",
  messagingSenderId: "471939461825",
  appId: "1:471939461825:web:dfbb40d38034e4e8461a40",
  measurementId: "G-KCDLD6MJSQ"
};
const app=initializeApp(firebaseConfig)
export const db=getFirestore(app)