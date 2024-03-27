import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-C0dXKXv_Tm7qSl7_vvIu8BiQhMTnLjw",
  authDomain: "zephyre-70ea6.firebaseapp.com",
  projectId: "zephyre-70ea6",
  storageBucket: "zephyre-70ea6.appspot.com",
  messagingSenderId: "905599114941",
  appId: "1:905599114941:web:03a6cb8671553d170721d4",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore();
export const storage = getStorage(app);
