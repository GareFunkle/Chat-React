import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArIwlrVc-jKzlbE-Mu8n9HJ_9hCzEnVGM",

  authDomain: "chat-react-34521.firebaseapp.com",

  projectId: "chat-react-34521",

  storageBucket: "chat-react-34521.appspot.com",

  messagingSenderId: "286026689073",

  appId: "1:286026689073:web:8b49f53cde2f441c8a0310",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
