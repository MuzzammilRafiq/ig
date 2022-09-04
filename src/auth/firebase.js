import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDjApx82Oi_h68fWBIZpFEjBd4KjjnY-GA",
  authDomain: "igclone-78834.firebaseapp.com",
  projectId: "igclone-78834",
  storageBucket: "igclone-78834.appspot.com",
  messagingSenderId: "260177366056",
  appId: "1:260177366056:web:610c11c6d6e190c0fd391d",
};

export const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

export const auth = getAuth(app);

export const storage = getStorage(app);
