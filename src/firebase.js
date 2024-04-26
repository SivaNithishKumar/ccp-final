import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwsAqId2v3R523WsMIEuSKq05hgnAiKzg",
  authDomain: "collab-cafe-2be8f.firebaseapp.com",
  projectId: "collab-cafe-2be8f",
  storageBucket: "collab-cafe-2be8f.appspot.com",
  messagingSenderId: "936807231938",
  appId: "1:936807231938:web:80c1528d5427be4cbf665b",
  measurementId: "G-P4DCELVFGK"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();