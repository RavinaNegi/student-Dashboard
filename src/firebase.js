import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuit8npoCDwSfY1r3g4_KBi9HQDUxlkJ8",
  authDomain: "student-dashboard-9fc98.firebaseapp.com",
  projectId: "student-dashboard-9fc98",
  storageBucket: "student-dashboard-9fc98.appspot.com", // ✅ fixed here
  messagingSenderId: "871898786311",
  appId: "1:871898786311:web:a4e91008d384b890f0d8a2",
  measurementId: "G-8MRWZ089GF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
