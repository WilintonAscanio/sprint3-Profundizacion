import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAlc1yxBgrsZQQTsAELqp0nTdZla9-4Wck",
  authDomain: "sprint4-aec49.firebaseapp.com",
  projectId: "sprint4-aec49",
  storageBucket: "sprint4-aec49.appspot.com",
  messagingSenderId: "89052049539",
  appId: "1:89052049539:web:84a27b0cdf0e482256abb6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const dataBase = getFirestore(app)
